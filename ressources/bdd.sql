
-------------------------------
-- Table: public.users
-- DROP TABLE public.users;
-- Table pour les utilisateurs
-------------------------------


CREATE TABLE public.users
(
    id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    email character varying(512) COLLATE pg_catalog."default" NOT NULL,
    firstname character varying(512) COLLATE pg_catalog."default" NOT NULL,
    lastname character varying(512) COLLATE pg_catalog."default" NOT NULL,
    password character varying(512) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.users
    OWNER to postgres;

--------------------------------
    -- Table: public.thread
    -- DROP TABLE public.thread;
    -- Table pour les threads (pas utilisé dans le projet)
--------------------------------


CREATE TABLE public.thread
(
    id integer NOT NULL DEFAULT nextval('thread_id_seq'::regclass),
    id_user integer NOT NULL,
    CONSTRAINT thread_pkey PRIMARY KEY (id),
    CONSTRAINT "user" FOREIGN KEY (id_user)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.thread
    OWNER to postgres;

---------------------------------
    -- Table: public.message
    -- DROP TABLE public.message;
    -- Table pour les messages (pas utilisé dans le projet)
---------------------------------

CREATE TABLE public.message
(
    id integer NOT NULL DEFAULT nextval('message_id_seq'::regclass),
    owner_id integer,
    thread_id integer,
    body character varying COLLATE pg_catalog."default",
    CONSTRAINT message_pkey PRIMARY KEY (id),
    CONSTRAINT thread FOREIGN KEY (thread_id)
        REFERENCES public.thread (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "user" FOREIGN KEY (owner_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.message
    OWNER to postgres;