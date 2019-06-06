CREATE PROCEDURE insert_maleta(id BIGINT, color varchar (10), peso INTEGER, costo INTEGER)
    LANGUAGE SQL
        AS $$
            INSERT INTO SuitCase (SuitcaseID, Color, Weight, Cost, State)
                VALUES
                    (id, color, peso, costo, FALSE);
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
