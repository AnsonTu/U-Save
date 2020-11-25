--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1
-- Dumped by pg_dump version 13.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: customer; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.customer (
    customer_id integer NOT NULL,
    name character varying(255),
    phone character varying(255),
    email character varying(255),
    address character varying(255)
);


ALTER TABLE public.customer OWNER TO dev;

--
-- Name: customer_customer_id_seq; Type: SEQUENCE; Schema: public; Owner: dev
--

CREATE SEQUENCE public.customer_customer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.customer_customer_id_seq OWNER TO dev;

--
-- Name: customer_customer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dev
--

ALTER SEQUENCE public.customer_customer_id_seq OWNED BY public.customer.customer_id;


--
-- Name: order_details; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.order_details (
    order_id integer NOT NULL,
    order_date date,
    shipping_date date,
    product_quantity integer,
    customer_id integer,
    product_id integer
);


ALTER TABLE public.order_details OWNER TO dev;

--
-- Name: order_details_order_id_seq; Type: SEQUENCE; Schema: public; Owner: dev
--

CREATE SEQUENCE public.order_details_order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.order_details_order_id_seq OWNER TO dev;

--
-- Name: order_details_order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dev
--

ALTER SEQUENCE public.order_details_order_id_seq OWNED BY public.order_details.order_id;


--
-- Name: product; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.product (
    product_id integer NOT NULL,
    name character varying(255),
    quantity integer,
    price real,
    supplier_id integer
);


ALTER TABLE public.product OWNER TO dev;

--
-- Name: product_product_id_seq; Type: SEQUENCE; Schema: public; Owner: dev
--

CREATE SEQUENCE public.product_product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_product_id_seq OWNER TO dev;

--
-- Name: product_product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dev
--

ALTER SEQUENCE public.product_product_id_seq OWNED BY public.product.product_id;


--
-- Name: supplier; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.supplier (
    supplier_id integer NOT NULL,
    name character varying(255),
    address character varying(255),
    phone character varying(255)
);


ALTER TABLE public.supplier OWNER TO dev;

--
-- Name: supplier_supplier_id_seq; Type: SEQUENCE; Schema: public; Owner: dev
--

CREATE SEQUENCE public.supplier_supplier_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.supplier_supplier_id_seq OWNER TO dev;

--
-- Name: supplier_supplier_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dev
--

ALTER SEQUENCE public.supplier_supplier_id_seq OWNED BY public.supplier.supplier_id;


--
-- Name: customer customer_id; Type: DEFAULT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.customer ALTER COLUMN customer_id SET DEFAULT nextval('public.customer_customer_id_seq'::regclass);


--
-- Name: order_details order_id; Type: DEFAULT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.order_details ALTER COLUMN order_id SET DEFAULT nextval('public.order_details_order_id_seq'::regclass);


--
-- Name: product product_id; Type: DEFAULT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.product ALTER COLUMN product_id SET DEFAULT nextval('public.product_product_id_seq'::regclass);


--
-- Name: supplier supplier_id; Type: DEFAULT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.supplier ALTER COLUMN supplier_id SET DEFAULT nextval('public.supplier_supplier_id_seq'::regclass);


--
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.customer (customer_id, name, phone, email, address) FROM stdin;
1	John Doe	6477781234	jdoe@gmail.com	15 Bank Avenue, Toronto, ON, P1P4A1
2	Sophie Wilson	4168782889	s.wil@yahoo.ca	12 Rainbow Drive, Toronto, ON, M1M8Y8
3	Jason Brown	4167579206	jason.b@gmail.com	281 Sunrise Street, Toronto, ON, E4C6H6
4	Drake Miller	6475687887	dmiller@gmail.com	5 Mountain Avenue, Markham, ON, E3V2L9
5	Clara Li	9057479206	clara.li@gmail.com	61 Silicon Road, Oshawa, ON, V8B7S9
6	Linda Jones	6479819206	linda1@gmail.com	394 George Street, Oshawa, ON, N1L9M5
7	Anson Tu	6479682889	anson.tu@ontariotechu.net	123 Goldfish Road, Scarborough, ON, A2E6K6
8	Marina Li	4167879206	marinali@gmail.com	42 Rodent Road, Toronto, ON, P1P4N4
10	George Lucas	9057872889	george.lucas@gmail.com	1 Star Valley Drive, Oshawa, ON, L9C7U7
11	Charles Xavier	4162546557	c.xav@gmail.com	24 X-Drive, Toronto, ON, M1C2A2
12	Jacob Newman	4164932949	jacobman@yahoo.ca	144 Angular Drive, Oshawa, ON, L2Z9C9
\.


--
-- Data for Name: order_details; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.order_details (order_id, order_date, shipping_date, product_quantity, customer_id, product_id) FROM stdin;
1	2020-09-05	2020-09-06	1	2	2
2	2020-09-05	2020-09-06	2	2	4
3	2020-09-27	2020-09-28	2	4	5
4	2020-10-05	2020-10-07	3	4	2
5	2020-10-30	2020-10-31	2	4	7
6	2020-11-01	2020-11-02	4	1	3
7	2020-10-10	2020-10-11	2	3	1
8	2020-10-10	2020-10-11	2	3	1
9	2020-10-16	2020-10-17	2	3	7
11	2020-05-15	2020-05-18	10	1	18
12	2020-05-15	2020-05-18	10	1	18
13	2020-10-20	2020-10-23	2	1	3
\.


--
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.product (product_id, name, quantity, price, supplier_id) FROM stdin;
2	Bread	10	6	4
3	Rice	8	9	3
4	Spaghetti	12	8	4
5	Macaroni	12	8	4
6	Oatmeal	4	3.5	4
7	Cereal	2	3.5	3
8	Salmon	5	7.5	6
9	Tuna	8	8.5	6
10	Lettuce	13	4.5	1
11	Cabbage	1	3.5	1
12	Celery	1	2	1
13	Pork Chop	9	8	5
14	Ham	5	4	5
15	Steak	16	12	5
1	Apple	10	2.5	2
16	Pear	8	2.5	2
18	Pineapple	12	4.75	2
19	Wagyu	4	42	5
20	Swiss Roll	18	4.55	7
21	Dark Chocolate	12	3	7
\.


--
-- Data for Name: supplier; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.supplier (supplier_id, name, address, phone) FROM stdin;
1	Vegetable Haven	123 Midnight Drive, Ajax, ON, A4C9V9	6135550146
2	Forest Foods	2 Solar Avenue, Markham, ON, B2E7E7	6135550158
3	Grain Enterprise	49 Square Drive, Toronto, ON, L8E6B8	6135540108
4	Carb City	12 Torch Road, Toronto, ON, A9C7E7	6135549206
5	The Butcher	98 Hillside Road, Toronto, ON, L2C9Z4	6135547209
6	Fish Kingdom	56 Northern Street, Toronto, ON, A2B9Z9	6135541125
7	Dessert Land	59 Sweet Farm Road, Toronto, ON, L2C7E7	6135530901
8	Sea World Fishery	2 Rock Bay, Toronto, ON, A2C8E4	6135451198
9	Land Crawlers	65 Sandy Shores, Markham, ON, M1A6N6	6135442929
\.


--
-- Name: customer_customer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public.customer_customer_id_seq', 12, true);


--
-- Name: order_details_order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public.order_details_order_id_seq', 13, true);


--
-- Name: product_product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public.product_product_id_seq', 21, true);


--
-- Name: supplier_supplier_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public.supplier_supplier_id_seq', 10, true);


--
-- Name: customer customer_pkey; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (customer_id);


--
-- Name: order_details order_details_pkey; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_details_pkey PRIMARY KEY (order_id);


--
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (product_id);


--
-- Name: supplier supplier_pkey; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.supplier
    ADD CONSTRAINT supplier_pkey PRIMARY KEY (supplier_id);


--
-- Name: order_details order_details_customer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_details_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customer(customer_id);


--
-- Name: order_details order_details_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_details_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(product_id);


--
-- Name: product product_supplier_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_supplier_id_fkey FOREIGN KEY (supplier_id) REFERENCES public.supplier(supplier_id);


--
-- PostgreSQL database dump complete
--

