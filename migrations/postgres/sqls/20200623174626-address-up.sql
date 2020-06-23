CREATE TABLE address(
  address_id SERIAL,
  address_street TEXT,
  address_suit TEXT,
  address_zcode TEXT,
  address_geolat TEXT,
  address_geolong TEXT,

  CONSTRAINT pk_address PRIMARY KEY (address_id)
);
