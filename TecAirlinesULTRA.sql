Create Database TecAirlinesΩ
--use TecAirlinesΩ

create table Usuarios(
	NumCed bigint,
	FName varchar(255),
	LName varchar(255),
	idRol int,
	username varchar(255) UNIQUE,
	passwor varchar(255),
	constraint IDUSER_pk primary key (idUser),
	);

create table Roles(
	IDROL int,
	RolName varchar(255) UNIQUE not null,
	constraint IDROL_pk primary key(IDROL)
	);

ALTER TABLE Usuarios
ADD FOREIGN KEY (IdRol) REFERENCES Roles(IDROL);

-- =======================================================
-- Create Stored Procedure Template for Azure SQL Database
-- =======================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:      <Ricardo Molina>
-- Create Date: <27/5/2019 >
-- Description: <This procedure adds rols>
-- =============================================
CREATE PROCEDURE ustp_addrol
(
    -- Add the parameters for the stored procedure here
    @id int,
	@name varchar(100)
)
AS
BEGIN
    -- SET NOCOUNT ON added to prevent extra result sets from
    -- interfering with SELECT statements.
    SET NOCOUNT ON

    -- Insert statements for procedure here
    begin transaction;

	begin try
		insert into Roles
		values(@id, @name);
	end try
	begin catch
		rollback transaction;
	end catch
	commit transaction;
END
GO
-- =============================================
CREATE PROCEDURE ustp_adduser
(
    -- Add the parameters for the stored procedure here
    @cedula bigint,
	@Fname varchar(20),
	@Lname varchar(20),
	@idRol int,
	@username varchar(255),
	@passwor varchar(255)
)
AS
BEGIN
    -- SET NOCOUNT ON added to prevent extra result sets from
    -- interfering with SELECT statements.
    SET NOCOUNT ON

    -- Insert statements for procedure here
    BEGIN TRANSACTION;
	BEGIN TRY
		insert into Usuarios
		values(@cedula, @Fname, @Lname, @idRol, @username, @passwor);
	end try
	BEGIN CATCH
		rollback transaction;
	end catch;
	COMMIT TRANSACTION
END
GO
-- =============================================
CREATE PROCEDURE ustp_askusers
(
    -- Add the parameters for the stored procedure here
	@parametroInnecesario int --#Solo ponga un valor si se lo piden
)
AS
BEGIN
    -- SET NOCOUNT ON added to prevent extra result sets from
    -- interfering with SELECT statements.
    SET NOCOUNT ON

    -- Insert statements for procedure here
    SELECT *
	FROM Usuarios
END
GO
