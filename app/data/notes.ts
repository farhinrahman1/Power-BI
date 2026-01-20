export const notes = [
  {
    id: 1,
    title: "Introduction to Power BI",
    snippet:
      "How Power BI transforms raw data into interactive dashboards and business insights.",
    category: "Data Visualization",
    level: "Beginner",
    readTime: "20 min",
    sections: [
      {
        heading: "What is Power BI?",
        content: `
Power BI is Microsoft’s business intelligence platform that transforms raw data into interactive dashboards, reports, and insights.


It enables organizations to:

- Combine data from multiple sources
- Clean and model datasets
- Build interactive visual reports
- Share insights securely across teams

📊 Visual analytics makes patterns easier to understand than spreadsheets.
        `,
      },
      {
        heading: "Core Components",
        content: `
🖥️ Power BI Desktop

- Create reports and dashboards
- Transform data using Power Query
- Build data models and relationships

☁️ Power BI Service

- Publish and share reports
- Collaborate using workspaces
- Access dashboards from anywhere
- Schedule data refreshes
        `,
      },
      {
        heading: "Power BI Interface",
        content: `
📐 Main Views

- Report View – Build visuals
- Table View – Inspect raw data
- Model View – Manage relationships
- DAX Editor – Write calculations

🎨 Canvas Area

- Design dashboards using charts, tables, maps, KPIs

🔍 Filter Pane

- Apply filters at visual, page, or report level

📊 Visualization Pane

- Select and customize chart types

🗃️ Data Pane

- Drag fields into visuals and measures
        `,
      },
      {
        heading: "Importing & Transforming Data",
        content: `
Real-world data rarely comes in perfect form. Before visualization, data must be transformed.

Common issues:

- Unnecessary columns
- Inconsistent formatting
- Extra characters
- Blank rows

🛠 Data cleaning is done using the Power Query Editor while loading data.
        `,
      },
      {
        heading: "Data Aggregation & Modeling",
        content: `
Power BI allows aggregation across dimensions using:

- Sum
- Average
- Min / Max
- Variance

Multiple datasets can be loaded and connected by:

- Building relationships
- Creating a proper data model
        `,
      },
      {
        heading: "Visualizing Data",
        content: `
📊 Common Visualization Types:

- Column & Bar charts
- Stacked & Clustered charts
- Line & Area charts
- Pie charts & Tree maps
- Cards & Multi-row cards
- Tables & Matrix visuals
        `,
      },
      {
        heading: "Drill Down & Interactivity",
        content: `

Hierarchies allow users to explore data at multiple levels:

- Level 1 → Level 2 → Level 3

Features:

- Drill down
- Drill through
- Sorting & filtering
- Viewing underlying data (right-click → Show as table)
        `,
      },
      {
        heading: "What I Built",
        content: `
By the end of this course, I:

- Loaded multiple datasets
- Built a data model
- Cleaned data using Power Query
- Created my first interactive Power BI report
        `,
      },
      {
        heading: "Key Takeaway",
        content: `
✅ Power BI is not just a visualization tool — it is a complete business intelligence ecosystem that turns data into decisions.
        `,
      },
    ],
  },
  {
    id: 2,
    title: "Introduction to SQL — Querying Data with Confidence",
    snippet:
      "How SQL helps you extract, organize, and analyze large datasets stored in databases.",
    category: "Databases",
    level: "Beginner",
    readTime: "20–25 min",
    sections: [
          {
            heading: "What is SQL?",
            content: `
SQL (Structured Query Language) is used to interact with databases.

It allows you to:

- Access stored data
- Organize information
- Analyze large datasets efficiently

Databases store massive amounts of data, and SQL lets us communicate with them using commands called queries.
        `,
          },
          {
            heading: "Databases & Tables",
            content: `
A database stores structured data.
A table is a component of a database.

- A database contains multiple tables
- Tables are connected through relationships
- Relational databases link tables using shared keys

🧱 Structure

- Rows → Records
- Columns → Fields
        `,
          },
          {
            heading: "Table & Field Naming Best Practices",
            content: `
📌 Table Naming

- Use lowercase
- Use underscores instead of spaces
- Names should clearly describe the data

📌 Field Naming

- Lowercase
- Singular nouns
- Underscores instead of spaces
- Include a unique identifier (primary key)
        `,
          },
          {
            heading: "Basic SQL Queries",
            content: `
🔑 Core Keywords

- SELECT
- FROM

Example:
SELECT * FROM books;

This retrieves all columns and rows from the books table.
        `,
          },
          {
            heading: "Filtering & Limiting Results",
            content: `
🔹 DISTINCT

Returns only unique values.

🔹 LIMIT (PostgreSQL)

SELECT title, author
FROM books
LIMIT 5;

🔹 TOP (SQL Server)

SELECT TOP (5) title, author
FROM books;
        `,
          },
          {
            heading: "Aliasing",
            content: `
Aliasing helps rename columns or tables for readability.

Example:
SELECT title AS book_title
FROM books;
        `,
          },
          {
            heading: "Views",
            content: `
A view is a saved SQL query.

- Does NOT store data
- Stores logic only
- Simplifies complex queries

Example:
CREATE VIEW sales_summary AS
SELECT product, SUM(amount)
FROM sales;
        `,
          },
          {
            heading: "Schemas",
            content: `
A schema is the blueprint of a database.

It defines:

- Tables
- Relationships
- Field data types
- Constraints
        `,
          },
          {
            heading: "SQL Data Types",
            content: `
📊 Common Data Types:

- Integer (INT)
- Numeric / Float
- Text / String
- Date

Strings are sequences of characters such as letters, numbers, or symbols.
        `,
          },
          {
            heading: "SQL Flavors",
            content: `
Different databases use different SQL flavors:

🐘 PostgreSQL

- Free & open source
- Uses LIMIT

🪟 SQL Server

- Free & paid
- Uses T-SQL and TOP

Core SQL concepts remain the same across all systems.
        `,
          },
          {
            heading: "Why SQL Matters",
            content: `
SQL is essential because it allows:

- Direct interaction with large datasets
- Precise data extraction
- Reliable analysis for BI tools like Power BI
        `,
          },
        ],
  },
];