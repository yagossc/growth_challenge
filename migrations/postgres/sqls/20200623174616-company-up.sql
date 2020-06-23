CREATE TABLE company(
  company_id SERIAL,
  company_name TEXT,
  company_cphrase TEXT,
  company_bs TEXT,

  CONSTRAINT pk_company PRIMARY KEY (company_id)
);
