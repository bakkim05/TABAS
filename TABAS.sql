-- insert listo
CREATE TABLE Employee (
  FirstName varchar (15),
  LastName varchar (15),
  ID_number bigint PRIMARY KEY NOT NULL,
  Role varchar
);

-- insert listo
CREATE TABLE Client (
  ClientID bigint PRIMARY KEY NOT NULL,
  FirstName varchar (15),
  LastName varchar (15),
  Email varchar (320),
  Phone varchar (30),
  Carnet varchar (30)
);

-- insert listo
CREATE TABLE SuitCase (
  SuitCaseID bigint PRIMARY KEY NOT NULL,
  Color varchar (10),
  Weight bigint,
  Cost bigint,
  State BOOLEAN
);

-- insert listo
CREATE TABLE BagCart (
  BagCartID bigint PRIMARY KEY NOT NULL,
  Brand varchar (30),
  Model bigint,
  Sec_Code varchar (10)
);

-- insert listo
CREATE TABLE Flight (
  FlightID bigint PRIMARY KEY NOT NULL,
  Departure_Date timestamp,
  Origin varchar (30),
  Destiny varchar
);

-- insert listo
CREATE TABLE Plane (
  PlaneID bigint PRIMARY KEY NOT NULL
);

-- insert listo
CREATE TABLE PlaneModel (
  PlaneModelID bigint PRIMARY KEY NOT NULL,
  CellarNumber bigint
);

CREATE TABLE Cellar (
  CellarID bigint PRIMARY KEY NOT NULL,
  Capacity bigint
);

-- insert listo
CREATE TABLE ClientXSuitCase (
  ClientID bigint,
  SuitCaseID bigint,
  PRIMARY KEY (ClientID, SuitCaseID)
);

-- insert listo
CREATE TABLE SuitCaseXBagCart (
  SuitCaseID bigint,
  BagCartID bigint,
  PRIMARY KEY (SuitCaseID, BagCartID)
);

-- insert listo
CREATE TABLE FlightXBagCart (
  BagCartID bigint,
  FlightID bigint,
  PRIMARY KEY (BagCartID, FlightID)
);


-- insert listo
CREATE TABLE PlaneXFlight (
  FlightID bigint,
  PlaneID bigint,
  PRIMARY KEY (FlightID, PlaneID)
);

-- insert listo
CREATE TABLE PlaneXPlaneModel (
  PlaneID bigint,
  PlaneModelID bigint,
  PRIMARY KEY (PlaneID, PlaneModelID)
);

CREATE TABLE PlaneXCellar (
  PlaneID bigint,
  CellarID bigint,
  PRIMARY KEY (PlaneID, CellarID)
);

-- CREATE TABLE SuitCaseXCellar (
--   SuitCaseID bigint,
--   CellarID bigint,
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
