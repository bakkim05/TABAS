CREATE TABLE Employee (
  FirstName varchar (15),
  LastName varchar (15),
  ID_number integer PRIMARY KEY,
  Role varchar
);

CREATE TABLE Client (
  FirstName varchar (15),
  LastName varchar (15),
  Email varchar (320) PRIMARY KEY,
  Phone integer,
  Carnet varchar (30)
);

CREATE TABLE Suitcase (
  Color varchar (10),
  Weight integer,
  Cost integer,
  SuitcaseID integer PRIMARY KEY,
  State BOOLEAN
);

CREATE TABLE BagCart (
  BagCartID integer PRIMARY KEY,
  Brand varchar (30),
  Model integer,
  Sec_Code varchar (10)
);

CREATE TABLE Flight (
  Departure_Date timestamp,
  Origin varchar (30),
  FlightID integer PRIMARY KEY,
  Destiny varchar
);

CREATE TABLE Plane (
  PlaneID integer PRIMARY KEY
);

CREATE TABLE PlaneModel (
  PlaneModelID integer PRIMARY KEY,
  CellarNumber integer
);

CREATE TABLE Cellar (
  CellarID integer PRIMARY KEY,
  Capacity integer
);

CREATE TABLE ClientXSuitcase (
  ClientEmail varchar (320),
  SuitcaseID integer,
  PRIMARY KEY (ClientEmail, SuitcaseID)
);

CREATE TABLE SuitCaseXBagCart (
  SuitcaseID integer,
  BagCartID integer,
  PRIMARY KEY (SuitcaseID, BagCartID)
);

CREATE TABLE FlightXBagCart (
  BagCartID integer,
  FlightID integer,
  PRIMARY KEY (BagCartID, FlightID)
);

CREATE TABLE PlaneXFlight (
  FlightID integer,
  PlaneID integer,
  PRIMARY KEY (FlightID, PlaneID)
);

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

ALTER TABLE ClientXSuitcase ADD FOREIGN KEY (ClientEmail) REFERENCES Client (Email);
ALTER TABLE ClientXSuitcase ADD FOREIGN KEY (SuitcaseID) REFERENCES Suitcase (SuitcaseID);

ALTER TABLE SuitCaseXBagCart ADD FOREIGN KEY (BagCartID) REFERENCES BagCart (BagCartID);
ALTER TABLE SuitCaseXBagCart ADD FOREIGN KEY (SuitcaseID) REFERENCES Suitcase (SuitcaseID);

ALTER TABLE FlightXBagCart ADD FOREIGN KEY (FlightID) REFERENCES Flight (FlightID);
ALTER TABLE FlightXBagCart ADD FOREIGN KEY (BagCartID) REFERENCES BagCart (BagCartID);

ALTER TABLE PlaneXFlight ADD FOREIGN KEY (FlightID) REFERENCES Flight (FlightID);
ALTER TABLE PlaneXFlight ADD FOREIGN KEY (PlaneID) REFERENCES Plane (PlaneID);

ALTER TABLE PlaneXPlaneModel ADD FOREIGN KEY (PlaneModelID) REFERENCES PlaneModel (PlaneModelID);
ALTER TABLE PlaneXPlaneModel ADD FOREIGN KEY (PlaneID) REFERENCES Plane (PlaneID);

ALTER TABLE PlaneXCellar ADD FOREIGN KEY (PlaneID) REFERENCES Plane (PlaneID);
ALTER TABLE PlaneXCellar ADD FOREIGN KEY (CellarID) REFERENCES Cellar (CellarID);
