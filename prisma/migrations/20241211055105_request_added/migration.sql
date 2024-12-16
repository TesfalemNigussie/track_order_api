-- AlterTable
CREATE SEQUENCE request_id_seq;
ALTER TABLE "request" ALTER COLUMN "id" SET DEFAULT nextval('request_id_seq'),
ALTER COLUMN "currentLoctionLat" DROP NOT NULL,
ALTER COLUMN "currentLocationLng" DROP NOT NULL;
ALTER SEQUENCE request_id_seq OWNED BY "request"."id";
