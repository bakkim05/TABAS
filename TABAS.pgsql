-- creacion de la tabla de empleados
CREATE TABLE Employee (
  FirstName varchar (15),
  LastName varchar (15),
  ID_number bigint PRIMARY KEY NOT NULL,
  Role varchar (13),
  Username varchar (50),
  Password varchar (50)
);

-- creacion de la tabla de clientes
CREATE TABLE Client (
  ClientID bigint PRIMARY KEY NOT NULL,
  FirstName varchar (15),
  LastName varchar (15),
  Email varchar (320),
  Phone INTEGER,
  Carnet varchar (30)
);

-- creacion de la tabla de maletas
CREATE TABLE SuitCase (
  SuitCaseID bigint PRIMARY KEY NOT NULL,
  Color VARCHAR (10),
  Weight INTEGER,
  Cost INTEGER,
  State BOOLEAN
);

-- creacion de la tabla de bagcarts
CREATE TABLE BagCart (
  BagCartID bigint PRIMARY KEY NOT NULL,
  Brand varchar (30),
  Model INTEGER,
  Sec_Code varchar (10)
);

-- creacion de la tabla de vuelos
CREATE TABLE Flight (
  FlightID bigint PRIMARY KEY NOT NULL,
  Departure_Date timestamp,
  Origin varchar (30),
  Destiny varchar,
  State BOOLEAN
);

-- creacion de la tabla aviones
CREATE TABLE Plane (
  PlaneID bigint PRIMARY KEY NOT NULL
);

-- creacion de la tabla de modelos de avion
CREATE TABLE PlaneModel (
  PlaneModelID bigint PRIMARY KEY NOT NULL,
  CellarNumber bigint
);

-- creacion de la tabla bodega
CREATE TABLE Cellar (
  CellarID bigint PRIMARY KEY NOT NULL,
  Capacity bigint
);

-- creacion de la tabla de reportes de maleta
CREATE TABLE ReportSuitcase (
  ReportID SERIAL PRIMARY KEY NOT NULL,
  FlightID BIGINT,
  TypeID BIGINT,
  Capacity INTEGER,
  SuitCasesOnPlane INTEGER,
  SuitCasesOnFlight INTEGER,
  SuitCasesOnBagCart INTEGER,
  Banned INTEGER
);

-- creacion de la tabla de maletas rechazadas
CREATE TABLE Banned (
  BannedSuitCaseID SERIAL PRIMARY KEY NOT NULL
);

-- creacion de la tabla relacion vuelo-reporte
CREATE TABLE FlightXReport (
  ReportID BIGINT,
  FlightID BIGINT,
  PRIMARY KEY (ReportID, FlightID)
);

-- creacion de la tabla relacion rechazadas-vuelo
CREATE TABLE BannedByFlight (
  ReportID BIGINT,
  BannedSuitCaseID BIGINT,
  PRIMARY KEY (ReportID, BannedSuitCaseID)
);

-- creacion de la tabla relacion cliente-maleta
CREATE TABLE ClientXSuitCase (
  ClientID bigint,
  SuitCaseID bigint,
  PRIMARY KEY (ClientID, SuitCaseID)
);

-- creacion de la tabla relacion maleta-bagcart
CREATE TABLE SuitCaseXBagCart (
  SuitCaseID bigint,
  BagCartID bigint,
  PRIMARY KEY (SuitCaseID, BagCartID)
);

-- creacion de la tabla relacion vuelo-bagcart
CREATE TABLE FlightXBagCart (
  BagCartID bigint,
  FlightID bigint,
  PRIMARY KEY (BagCartID, FlightID)
);


-- creacion de la tabla relacion avion-vuelo
CREATE TABLE PlaneXFlight (
  FlightID bigint,
  PlaneID bigint,
  PRIMARY KEY (FlightID, PlaneID)
);

-- creacion de la tabla relacion avion-modelo de avion
CREATE TABLE PlaneXPlaneModel (
  PlaneID bigint,
  PlaneModelID bigint,
  PRIMARY KEY (PlaneID, PlaneModelID)
);

-- creacion de la tabla relacion avion-bodega
CREATE TABLE PlaneXCellar (
  PlaneID bigint,
  CellarID bigint,
  PRIMARY KEY (PlaneID, CellarID)
);

-- creacion de la tabla relacion maleta-avion
CREATE TABLE SuitCaseXPlane (
  PlaneID BIGINT,
  SuitCaseID BIGINT,
  PRIMARY KEY (PlaneID, SuitCaseID)
);

-- declaracion de llaves foraneas para la relacion maleta-avion
ALTER TABLE SuitCaseXPlane ADD FOREIGN KEY (PlaneID) REFERENCES Plane (PlaneID);
ALTER TABLE SuitCaseXPlane ADD FOREIGN KEY (SuitCaseID) REFERENCES SuitCase (SuitCaseID);

-- declaracion de llaves foraneas para la relacion cliente-maleta
ALTER TABLE ClientXSuitCase ADD FOREIGN KEY (ClientID) REFERENCES Client (ClientID);
ALTER TABLE ClientXSuitCase ADD FOREIGN KEY (SuitCaseID) REFERENCES SuitCase (SuitCaseID);

-- declaracion de llaves foraneas para la relacion maleta-bagcart
ALTER TABLE SuitCaseXBagCart ADD FOREIGN KEY (BagCartID) REFERENCES BagCart (BagCartID);
ALTER TABLE SuitCaseXBagCart ADD FOREIGN KEY (SuitCaseID) REFERENCES SuitCase (SuitCaseID);

-- declaracion de llaves foraneas para la relacion vuelo-bagcart
ALTER TABLE FlightXBagCart ADD FOREIGN KEY (FlightID) REFERENCES Flight (FlightID);
ALTER TABLE FlightXBagCart ADD FOREIGN KEY (BagCartID) REFERENCES BagCart (BagCartID);

-- declaracion de llaves foraneas para la relacion avion-vuelo
ALTER TABLE PlaneXFlight ADD FOREIGN KEY (FlightID) REFERENCES Flight (FlightID);
ALTER TABLE PlaneXFlight ADD FOREIGN KEY (PlaneID) REFERENCES Plane (PlaneID);

-- declaracion de llaves foraneas para la relacion avion-modelo de avion
ALTER TABLE PlaneXPlaneModel ADD FOREIGN KEY (PlaneModelID) REFERENCES PlaneModel (PlaneModelID);
ALTER TABLE PlaneXPlaneModel ADD FOREIGN KEY (PlaneID) REFERENCES Plane (PlaneID);

-- declaracion de llaves foraneas para la relacion avion-bodega
ALTER TABLE PlaneXCellar ADD FOREIGN KEY (PlaneID) REFERENCES Plane (PlaneID);
ALTER TABLE PlaneXCellar ADD FOREIGN KEY (CellarID) REFERENCES Cellar (CellarID);

-- declaracion de llaves foraneas para la relacion rechazadas-vuelo
ALTER TABLE BannedByFlight ADD FOREIGN KEY (ReportID) REFERENCES ReportSuitcase (ReportID);
ALTER TABLE BannedByFlight ADD FOREIGN KEY (BannedSuitCaseID) REFERENCES Banned (BannedSuitCaseID);

-- declaracion de llaves foraneas para la relacion vuelo-reporte
ALTER TABLE FlightXReport ADD FOREIGN KEY (ReportID) REFERENCES ReportSuitcase (ReportID);
ALTER TABLE FlightXReport ADD FOREIGN KEY (FlightID) REFERENCES Flight (FlightID);
