import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PageContainer from "../../components/PageContainer";
import InfoCard from "../../components/InfoCard";

const useStyles = makeStyles({
  header: {
    fontWeight: "bold",
    fontSize: "36px",
    margin: "14px"
  },
  description: {
    fontSize: "18px",
    marginLeft: "14px",
    marginBottom: "8px"
  }
});

function Home() {
  const classes = useStyles();

  return (
    <PageContainer>
      <h2>Home</h2>
      <InfoCard>
        <Typography className={classes.header}>U-Save</Typography>
        <Typography className={classes.description}>
          An online market for post-secondary students
        </Typography>
      </InfoCard>
      <InfoCard>
        <Typography className={classes.header}>About Us</Typography>
        <Typography className={classes.description}>
          Anson Tu (100655482) - Third-Year Software Engineering student at
          Ontario Tech University
          <br />
          Kaushik Ramani (100651855) - Third-Year Software Engineering student
          at Ontario Tech University
        </Typography>
      </InfoCard>
      <InfoCard>
        <Typography className={classes.header}>Our Goal</Typography>
        <Typography className={classes.description}>
          Every year, post-secondary students across North America struggle
          financially, due to increasing costs of tuition and school-related
          learning material. U-Save aims to provide a space for post-secondary
          students to obtain nutritious ingredients at affordable prices, to
          ensure that students are well-fed and able to focus on their studies.
        </Typography>
      </InfoCard>
      <InfoCard>
        <Typography className={classes.header}>
          Design and Tech Stack
        </Typography>
        <Typography className={classes.description}>
          U-Save was designed using the <b>PERN</b> stack:
          <br />- PostgreSQL
          <br />- Express
          <br />- React
          <br />- Node.js
          <br />
          This stack was chosen due to its proven reliability for building
          scalable web applications.
        </Typography>
      </InfoCard>
      <InfoCard>
        <Typography className={classes.header}>React</Typography>
        <Typography className={classes.description}>
          React gives us more control over the state within our application, and
          allows us to write modular components, with cleaner code that can be
          reused. It also gave us access to external libraries for more
          customizability and flexibility.
        </Typography>
      </InfoCard>
      <InfoCard>
        <Typography className={classes.header}>Node.js and Express</Typography>
        <Typography className={classes.description}>
          Node.js provides a simple and fast server that supports single-page
          applications, such as the ones made using React. It also allows us to
          code the server using JavaScript, so the entire application stack can
          be developed using JavaScript. Finally, Node.js gives us access to
          external libraries and packages via NPM.
          <br />
          Express makes the developent of the application's API easier, and
          provides routes to make the API endpoints more accessible.
        </Typography>
      </InfoCard>
      <InfoCard>
        <Typography className={classes.header}>PostgreSQL</Typography>
        <Typography className={classes.description}>
          Using PostgreSQL would give us the opportunity to take everything we
          have learned in class, and apply it in a real-world situation.
          PostgreSQL is a relational database that stores our information in the
          form of tables, and information can be retrieved or modified from the
          database using SQL queries.
        </Typography>
      </InfoCard>
    </PageContainer>
  );
}

export default Home;
