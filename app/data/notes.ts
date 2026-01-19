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
];
