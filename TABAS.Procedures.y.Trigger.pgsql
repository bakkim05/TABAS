-- procedimiento para agregar una nueva maleta
CREATE FUNCTION insert_maleta(id_suitcase BIGINT, color varchar (10), peso INTEGER, costo INTEGER, id_client BIGINT, id_bagcart BIGINT) RETURNS void
AS $$
BEGIN
	INSERT INTO SuitCase (SuitCaseID, Color, Weight, Cost, State) VALUES (id, color, peso, costo, FALSE);
	INSERT INTO ClientXSuitCase (ClietnID, SuitCaseID) VALUES (id_suitcase, id_clietn);
	INSERT INTO SuitCaseXBagCart (SuitCaseID, BagCartID) VALUES (id_suitcase, id_bagcart);
END;
$$ LANGUAGE plpgsql;

-- procedimiento para añadir un cliente
CREATE FUNCTION insert_cliente(id BIGINT, nombre VARCHAR (15), apellido VARCHAR (15), email VARCHAR (320), phone INTEGER, carnet VARCHAR (30)) RETURNS void
        AS $$
            BEGIN
            -- insert de un cliente
            INSERT INTO Client (ClientID, FirstName, LastName, Email, Phone, Carnet)
                VALUES
                    (id, nombre, apellido, email, phone, carnet);
                    END;
        $$ LANGUAGE plpgsql;

-- procedimiento para crear un bagcart
CREATE FUNCTION insert_bagcart(id BIGINT, brand VARCHAR (30), model INTEGER) RETURNS void
        AS $$
            BEGIN
            -- insert del nuevo bagcart
            INSERT INTO BagCart (BagCartID, Brand, Model, Sec_Code)
                VALUES
                    (id, brand, model, NULL);
                    END;
        $$ LANGUAGE plpgsql;

-- procedimieto para actualizar el estado de una maleta de aprovado
CREATE FUNCTION update_maleta(id_maleta BIGINT, estado BOOLEAN) RETURNS void
        AS $$
            BEGIN
            UPDATE SuitCase SET State = estado WHERE SuitCaseID = id_maleta;
            IF estado = FALSE {
                INSERT INTO Banned (BannedSuitCase)
            }
            END;
        $$ LANGUAGE plpgsql;

CREATE FUNCTION super_report(id_vuelo BIGINT) RETURNS void
        AS $$
            BEGIN
            INSERT INTO ReportSuitcase(FlightID, TypeID, Capacity, SuitCasesOnPlane, SuitCasesOnFlight, SuitCasesOnBagCart, Banned)
                VALUES
                    (
                        id_vuelo,
                        Select planemodelid from planexplanemodel where planeid in (
                            select planeid from planexflight where flightid = id_vuelo
                        ),
                        200 * (select cellarnumber as cn from planemodel where planemodelid in (
            	                select planemodelid from planexplanemodel where planeid in (
            	                	select planeid from planexflight where flightid  = id_vuelo)
                                    )
                        ),
                        select count(suitcaseid) from suitcasexplane where planeid in (
                        	select planeid from planexflight where flightid = id_vuelo
                        ),
                        select count(suitcaseid) from suitcasexbagcart where bagcartid in (
                        	select bagcartid from flightxbagcart where flightid = id_vuelo
                        ),
                        select count(estado) from suitcase where (estado = true and suitcaseid in (
            	            select suitcaseid from suitcasexplane where planeid in (
            		            select planeid from planexflight where flightid = id_vuelo
            		            )
            	            )
                        ),
                        select count(estado) from suitcase where (estado = false and suitcaseid in (
                        	select suitcaseid from suitcasexplane where planeid in (
            		            select planeid from planexflight where flightid = id_vuelo
                                )
                            )
                        ),
                    );
                    END;
        $$ LANGUAGE plpgsql;

CREATE TRIGGER informe_AU AFTER UPDATE ON Flight FOR EACH ROW call super_report(FlightID);
