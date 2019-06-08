-- insert listo
CREATE TABLE Employee (
  FirstName varchar (15),
  LastName varchar (15),
  ID_number bigint PRIMARY KEY NOT NULL,
  Role varchar (13),
  Username varchar (50),
  Password varchar (50)
);

-- insert listo
CREATE TABLE Client (
  ClientID bigint PRIMARY KEY NOT NULL,
  FirstName varchar (15),
  LastName varchar (15),
  Email varchar (320),
  Phone INTEGER,
  Carnet varchar (30)
);

-- insert listo
CREATE TABLE SuitCase (
  SuitCaseID bigint PRIMARY KEY NOT NULL,
  Color VARCHAR (10),
  Weight INTEGER,
  Cost INTEGER,
  State BOOLEAN
);

-- insert listo
CREATE TABLE BagCart (
  BagCartID bigint PRIMARY KEY NOT NULL,
  Brand varchar (30),
  Model INTEGER,
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

-- insert listo
CREATE TABLE Cellar (
  CellarID bigint PRIMARY KEY NOT NULL,
  Capacity bigint
);

CREATE TABLE ReportSuitcase (
  ReportID BIGINT PRIMARY KEY NOT NULL,
  TypeID BIGINT,
  Capacity INTEGER,
  SuitCasesOnPlane INTEGER,
  SuitCasesOnFlight INTEGER,
  SuitCasesOnBagCart INTEGER
);

CREATE TABLE Banned(
  BannedSuitCaseID BIGINT PRIMARY KEY NOT NULL
);

CREATE TABLE FlightXReport (
  ReportID BIGINT,
  FlightID BIGINT,
  PRIMARY KEY (ReportID, FlightID)
);

CREATE TABLE BannedByFlight (
  ReportID BIGINT,
  BannedSuitCaseID BIGINT,
  PRIMARY KEY (ReportID, BannedSuitCaseID)
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

CREATE TABLE SuitCaseXPlane (
  PlaneID BIGINT,
  SuitCaseID BIGINT,
  PRIMARY KEY (PlaneID, SuitCaseID)
);

ALTER TABLE SuitCaseXPlane ADD FOREIGN KEY (PlaneID) REFERENCES Plane (PlaneID);
ALTER TABLE SuitCaseXPlane ADD FOREIGN KEY (SuitCaseID) REFERENCES SuitCase (SuitCaseID);

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

ALTER TABLE BannedByFlight ADD FOREIGN KEY (ReportID) REFERENCES ReportSuitcase (ReportID);
ALTER TABLE BannedByFlight ADD FOREIGN KEY (BannedSuitCaseID) REFERENCES Banned (BannedSuitCaseID);

ALTER TABLE FlightXReport ADD FOREIGN KEY (ReportID) REFERENCES ReportSuitcase (ReportID);
ALTER TABLE FlightXReport ADD FOREIGN KEY (FlightID) REFERENCES Flight (FlightID);
