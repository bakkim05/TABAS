CREATE PROCEDURE insert_maleta(id_suitcase BIGINT, color varchar (10), peso INTEGER, costo INTEGER, id_client BIGINT, id_bagcart BIGINT)
    LANGUAGE SQL
        AS $$
            INSERT INTO SuitCase (SuitCaseID, Color, Weight, Cost, State)
                VALUES
                    (id, color, peso, costo, FALSE);
            INSERT INTO ClientXSuitCase (ClietnID, SuitCaseID)
                VALUES
                    (id_suitcase, id_clietn);
            INSERT INTO SuitCaseXBagCart (SuitCaseID, BagCartID)
                VALUES
                    (id_suitcase, id_bagcart);
        $$;

CREATE PROCEDURE insert_cliente(id BIGINT, nombre VARCHAR (15), apellido VARCHAR (15), email VARCHAR (320), phone INTEGER, carnet VARCHAR (30))
    LANGUAGE SQL
        AS $$
            INSERT INTO Client (ClientID, FirstName, LastName, Email, Phone, Carnet)
                VALUES
                    (id, nombre, apellido, email, phone, carnet);
        $$;

CREATE PROCEDURE insert_bagcart(id BIGINT, brand VARCHAR (30), model INTEGER)
    LANGUAGE SQL
        AS $$
            INSERT INTO BagCart (BagCartID, Brand, Model, Sec_Code)
                VALUES
                    (id, brand, model, NULL);
        $$;

CREATE PROCEDURE asignar_maleta(id_maleta BIGINT, id_bagcart BIGINT)
    LANGUAGE SQL
        AS $$
            INSERT INTO SuitCaseXBagCart (SuitCaseID, BagCartID)
                VALUES
                    (id_maleta, id_bagcart)
        $$;

CREATE PROCEDURE update_maleta(id_maleta BIGINT, estado BOOLEAN)
    LANGUAGE SQL
        AS $$
            UPDATE SuitCase SET State = estado WHERE SuitCaseID = id_maleta;
        $$
