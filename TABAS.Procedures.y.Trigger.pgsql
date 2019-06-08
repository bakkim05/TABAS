
-- procedimiento para agregar una nueva maleta
CREATE PROCEDURE insert_maleta(id_suitcase BIGINT, color varchar (10), peso INTEGER, costo INTEGER, id_client BIGINT, id_bagcart BIGINT)
    LANGUAGE SQL
        AS $$
            -- insert de la maleta
            INSERT INTO SuitCase (SuitCaseID, Color, Weight, Cost, State)
                VALUES
                    (id, color, peso, costo, FALSE);
            -- insert en la relacion de cliente-maleta
            INSERT INTO ClientXSuitCase (ClietnID, SuitCaseID)
                VALUES
                    (id_suitcase, id_clietn);
            -- insert en la relacion maleta-suitcase
            INSERT INTO SuitCaseXBagCart (SuitCaseID, BagCartID)
                VALUES
                    (id_suitcase, id_bagcart);
        $$;

-- procedimiento para añadir un cliente
CREATE PROCEDURE insert_cliente(id BIGINT, nombre VARCHAR (15), apellido VARCHAR (15), email VARCHAR (320), phone INTEGER, carnet VARCHAR (30))
    LANGUAGE SQL
        AS $$
            -- insert de un cliente
            INSERT INTO Client (ClientID, FirstName, LastName, Email, Phone, Carnet)
                VALUES
                    (id, nombre, apellido, email, phone, carnet);
        $$;

-- procedimiento para crear un bagcart
CREATE PROCEDURE insert_bagcart(id BIGINT, brand VARCHAR (30), model INTEGER)
    LANGUAGE SQL
        AS $$
            -- insert del nuevo bagcart
            INSERT INTO BagCart (BagCartID, Brand, Model, Sec_Code)
                VALUES
                    (id, brand, model, NULL);
        $$;

-- procedimieto para actualizar el estado de una maleta de aprovado
CREATE PROCEDURE update_maleta(id_maleta BIGINT, estado BOOLEAN)
    LANGUAGE SQL
        AS $$
            UPDATE SuitCase SET State = estado WHERE SuitCaseID = id_maleta;
        $$
