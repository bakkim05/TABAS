-- insert listo
CREATE TABLE Employee (
  FirstName varchar (15),
  LastName varchar (15),
  ID_number integer PRIMARY KEY NOT NULL,
  Role varchar
);

-- insert listo
CREATE TABLE Client (
  ClientID integer PRIMARY KEY NOT NULL,
  FirstName varchar (15),
  LastName varchar (15),
  Email varchar (320),
  Phone integer,
  Carnet varchar (30)
);

-- insert listo
CREATE TABLE SuitCase (
  SuitCaseID integer PRIMARY KEY NOT NULL,
  Color varchar (10),
  Weight integer,
  Cost integer,
  State BOOLEAN
);

-- insert listo
CREATE TABLE BagCart (
  BagCartID integer PRIMARY KEY NOT NULL,
  Brand varchar (30),
  Model integer,
  Sec_Code varchar (10)
);

-- insert listo
CREATE TABLE Flight (
  FlightID integer PRIMARY KEY NOT NULL,
  Departure_Date timestamp,
  Origin varchar (30),
  Destiny varchar
);

-- insert listo
CREATE TABLE Plane (
  PlaneID integer PRIMARY KEY NOT NULL
);

-- insert listo
CREATE TABLE PlaneModel (
  PlaneModelID integer PRIMARY KEY NOT NULL,
  CellarNumber integer
);

CREATE TABLE Cellar (
  CellarID integer PRIMARY KEY NOT NULL,
  Capacity integer
);

-- insert listo
CREATE TABLE ClientXSuitCase (
  ClientID integer,
  SuitCaseID integer,
  PRIMARY KEY (ClientEmail, SuitCaseID)
);

-- insert listo
CREATE TABLE SuitCaseXBagCart (
  SuitCaseID integer,
  BagCartID integer,
  PRIMARY KEY (SuitCaseID, BagCartID)
);

-- insert listo
CREATE TABLE FlightXBagCart (
  BagCartID integer,
  FlightID integer,
  PRIMARY KEY (BagCartID, FlightID)
);


-- insert listo
CREATE TABLE PlaneXFlight (
  FlightID integer,
  PlaneID integer,
  PRIMARY KEY (FlightID, PlaneID)
);

-- insert listo
CREATE TABLE PlaneXPlaneModel (
  PlaneID integer,
  PlaneModelID integer,
  PRIMARY KEY (PlaneID, PlaneModelID)
);

CREATE TABLE PlaneXCellar (
  PlaneID integer,
  CellarID integer,
  PRIMARY KEY (PlaneID, CellarID)
);

-- CREATE TABLE SuitCaseXCellar (
--   SuitCaseID INTEGER,
--   CellarID INTEGER,
--   PRIMARY KEY (SuitCaseID, CellarID)
-- )

ALTER TABLE ClientXSuitCase ADD FOREIGN KEY (ClientID) REFERENCES Client (ClientID);
ALTER TABLE ClientXSuitCase ADD FOREIGN KEY (SuitCaseID) REFERENCES SuitCase (SuitCaseID);

ALTER TABLE SuitCaseXBagCart ADD FOREIGN KEY (BagCartID) REFERENCES BagCart (BagCartID);
ALTER TABLE SuitCaseXBagCart ADD FOREIGN KEY (SuitCaseID) REFERENCES SuitCase (SuitCaseID);

ALTER TABLE FlightXBagCart ADD FOREIGN KEY (FlightID) REFERENCES Flight (FlightID);
ALTER TABLE FlightXBagCart ADD FOREIGN KEY (BagCartID) REFERENCES BagCart (BagCartID);

ALTER TABLE PlaneXFlight ADD FOREIGN KEY (FlightID) REFERENCES Flight (FlightID);
ALTER TABLE PlaneXFlight ADD FOREIGN KEY (PlaneID) REFERENCES Plane (PlaneID);

ALTER TABLE PlaneXPlaneModel ADD FOREIGN KEY (PlaneModelID) REFERENCES PlaneModel (PlaneModelID);
ALTER TABLE PlaneXPlaneModel ADD FOREIGN KEY (PlaneID) REFERENCES Plane (PlaneID);

ALTER TABLE PlaneXCellar ADD FOREIGN KEY (PlaneID) REFERENCES Plane (PlaneID);
ALTER TABLE PlaneXCellar ADD FOREIGN KEY (CellarID) REFERENCES Cellar (CellarID);

-- ALTER TABLE SuitCaseXCellar ADD FOREIGN KEY (SuitCaseID) REFERENCES SuitCase (SuitCaseID);
-- ALTER TABLE SuitCaseXCellar ADD FOREIGN KEY (CellarID) REFERENCES Cellar (CellarID);
