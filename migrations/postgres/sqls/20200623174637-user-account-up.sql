CREATE TABLE user_account (
  user_id SERIAL,
  user_name TEXT NOT NULL,
  user_uname TEXT NOT NULL,
  user_email TEXT,
  address_id INT,
  user_phone TEXT,
  user_website TEXT,
  company_id INT,

  CONSTRAINT pk_user PRIMARY KEY (user_id),
  CONSTRAINT fk_address FOREIGN KEY (address_id) REFERENCES address (address_id),
  CONSTRAINT fk_company FOREIGN KEY (company_id) REFERENCES company (company_id)
);

CREATE INDEX ix_user_company ON user_account (company_id);
