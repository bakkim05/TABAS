CREATE DATABASE TABAS;

CREATE TABLE "Employee" (
  "FirstName" varchar (15),
  "LastName" varchar (15),
  "ID_number" integer PRIMARY KEY UNIQUE,
  "Role" varchar
);

CREATE TABLE "User" (
  "FirstName" varchar (15),
  "LastName" varchar (15),
  "Email" varchar (320) PRIMARY KEY UNIQUE,
  "Phone" integer,
  "Carnet" varchar (30)
);

CREATE TABLE "Suitcase" (
  "Color" varchar (10),
  "Weight" integer,
  "Cost" integer,
  "SuitcaseID" integer PRIMARY KEY UNIQUE,
  "State" boolean
);

CREATE TABLE "BagCart" (
  "BagCartID" integer PRIMARY KEY UNIQUE,
  "Brand" varchar (30),
  "Model" integer,
  "Sec_Code" varchar (10)
);

CREATE TABLE "Flight" (
  "Departure_Date" datetime,
  "Origin" varchar (30),
  "FlightID" integer PRIMARY KEY,
  "Destiny" varchar
);

CREATE TABLE "Plane" (
  "PlaneID" integer PRIMARY KEY UNIQUE
);

CREATE TABLE "Type" (
  "TypeID" integer PRIMARY KEY UNIQUE,
  "CellarNumber" integer
);

CREATE TABLE "Cellar" (
  "CellarID" integer PRIMARY KEY UNIQUE,
  "Capacity" integer
);

CREATE TABLE "UserXSuitcase" (
  "UserEmail" varchar,
  "SuitcaseID" integer,
  PRIMARY KEY (UserEmail, SuitcaseID)
);

CREATE TABLE "SuitCaseXBagCart" (
  "SuitcaseID" integer,
  "BagCartID" integer,
  PRIMARY KEY (SuitcaseID, BagCartID)
);

CREATE TABLE "FlightXBagCart" (
  "BagCartID" integer,
  "FlightID" integer,
  PRIMARY KEY (BagCartID, FlightID)
);

CREATE TABLE "PlaneXFlight" (
  "FlightID" integer,
  "PlaneID" integer,
  PRIMARY KEY (FlightID, PlaneID)
);

CREATE TABLE "PlaneXType" (
  "PlaneID" integer,
  "TypeID" integer,
  PRIMARY KEY (PlaneID, TypeID)
);

CREATE TABLE "PlaneXCellar" (
  "PlaneID" integer,
  "CellarID" integer,
  PRIMARY KEY (PlaneID, CellarID)
);

ALTER TABLE "UserXSuitcase" ADD FOREIGN KEY ("UserEmail") REFERENCES "User" ("Email");

ALTER TABLE "UserXSuitcase" ADD FOREIGN KEY ("SuitcaseID") REFERENCES "Suitcase" ("SuitcaseID");

ALTER TABLE "Suitcase" ADD FOREIGN KEY ("SuitcaseID") REFERENCES "SuitCaseXBagCart" ("SuitcaseID");

ALTER TABLE "SuitCaseXBagCart" ADD FOREIGN KEY ("BagCartID") REFERENCES "BagCart" ("BagCartID");

ALTER TABLE "BagCart" ADD FOREIGN KEY ("BagCartID") REFERENCES "FlightXBagCart" ("BagCartID");

ALTER TABLE "FlightXBagCart" ADD FOREIGN KEY ("FlightID") REFERENCES "Flight" ("FlightID");

ALTER TABLE "PlaneXFlight" ADD FOREIGN KEY ("FlightID") REFERENCES "Flight" ("FlightID");

ALTER TABLE "PlaneXFlight" ADD FOREIGN KEY ("PlaneID") REFERENCES "Plane" ("PlaneID");

ALTER TABLE "Plane" ADD FOREIGN KEY ("PlaneID") REFERENCES "PlaneXType" ("PlaneID");

ALTER TABLE "PlaneXType" ADD FOREIGN KEY ("TypeID") REFERENCES "Type" ("TypeID");

ALTER TABLE "PlaneXCellar" ADD FOREIGN KEY ("PlaneID") REFERENCES "Plane" ("PlaneID");

ALTER TABLE "Cellar" ADD FOREIGN KEY ("CellarID") REFERENCES "PlaneXCellar" ("CellarID");