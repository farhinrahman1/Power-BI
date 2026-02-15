"use client";

import { useRouter } from "next/navigation";
import { Card } from "@/app/components/ui/card";

export default function SalesInsightsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={() => router.back()}
          className="mb-6 text-sm text-primary hover:underline"
        >
          ← Back
        </button>

        <Card className="p-8">
          <h1 className="text-3xl font-bold mb-4">
            📊 Sales Insights Dashboard – Power BI Case Study
          </h1>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              1️⃣ Problem Statement
            </h2>
            <p className="mb-2">
              A computer hardware manufacturing company was facing declining and
              inconsistent sales performance.
            </p>
            <p className="mb-2">The sales team lacked:</p>
            <ul className="list-disc list-inside mb-2">
              <li>Clear visibility into revenue trends</li>
              <li>Market-level performance insights</li>
              <li>Real-time performance tracking</li>
              <li>Automated reporting</li>
            </ul>
            <p>
              Manual data gathering was time-consuming and inefficient. To solve
              this, the company hired a Data Analytics Team to uncover hidden
              sales insights and build a centralized dashboard in Power BI.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              2️⃣ Project Objective
            </h2>
            <p className="mb-2">
              To design and implement an automated Power BI dashboard that:
            </p>
            <ul className="list-disc list-inside mb-2">
              <li>Tracks total revenue</li>
              <li>Tracks sales quantity</li>
              <li>Provides revenue breakdown by market and product</li>
              <li>Enables faster, data-driven decision-making</li>
              <li>Reduces manual reporting time</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              3️⃣ Stakeholders Involved
            </h2>
            <p className="mb-2">
              Sales Director, Marketing Team, Customer Service Team, Data &
              Analytics Team, IT Team
            </p>
            <p className="mb-2">Team Roles:</p>
            <ul className="list-disc list-inside mb-2">
              <li>Software Engineers – Falcons</li>
              <li>Data Engineers – Data Miners</li>
              <li>Data Analysts – Data Masters</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">4️⃣ Success Criteria</h2>
            <ul className="list-disc list-inside mb-2">
              <li>
                The dashboard uncovers sales insights using the latest available
                data
              </li>
              <li>The sales team improves decision-making</li>
              <li>The company proves at least 10% cost savings</li>
              <li>Analysts reduce manual data gathering by 20%</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              🔎 Data Discovery & Understanding
            </h2>
            <p className="mb-2">
              Database: <strong>DEV_sales_insights</strong> — Schema:{" "}
              <strong>sales</strong>
            </p>
            <p className="mb-2">Key Tables:</p>
            <ul className="list-disc list-inside mb-2">
              <li>
                Customers — <code>SELECT * FROM sales.customers;</code>
              </li>
              <li>
                Transactions — <code>SELECT * FROM sales.transactions;</code>
              </li>
              <li>
                Products — <code>SELECT * FROM sales.products;</code>
              </li>
              <li>Markets — market_code, market_name, zone</li>
            </ul>

            <h3 className="font-semibold mt-3">Primary Analysis</h3>
            <p className="mb-2">
              Total Transactions:{" "}
              <code>SELECT COUNT(*) FROM sales.transactions;</code> — Result:
              150,283
            </p>
            <p className="mb-2">
              Total Customers:{" "}
              <code>SELECT COUNT(*) FROM sales.customers;</code> — Result: 38
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              📅 Year-Based Analysis (Examples)
            </h2>
            <pre className="bg-muted p-3 rounded mb-2 overflow-auto">
              <code>
                SELECT sales.transactions.*, sales.date.* FROM
                sales.transactions INNER JOIN sales.date ON
                sales.transactions.order_date = sales.date.date WHERE
                sales.date.year = 2020;
              </code>
            </pre>
            <p className="mb-2">Total Revenue in 2020 example:</p>
            <pre className="bg-muted p-3 rounded mb-2 overflow-auto">
              <code>
                SELECT SUM(sales.transactions.sales_amount) FROM
                sales.transactions INNER JOIN sales.date ON
                sales.transactions.order_date = sales.date.date WHERE
                sales.date.year = 2020;
              </code>
            </pre>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              🧹 Data Cleaning & ETL
            </h2>
            <p className="mb-2">
              Connecting Power BI to MySQL: Server: localhost — Database: sales.
              Load tables and create relationships (market_code, order_date,
              product_code).
            </p>
            <p className="mb-2">
              Common cleaning issues shown with example queries (negative sales,
              currency inconsistencies).
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              📊 Dashboard Development (Power BI)
            </h2>
            <p className="mb-2">Measures (DAX) examples:</p>
            <pre className="bg-muted p-3 rounded mb-2 overflow-auto">
              <code>
                Revenue = SUM('sales transactions'[sales_amount]) Sales Qty =
                SUM('sales transactions'[sales_qty])
              </code>
            </pre>
            <p className="mb-2">
              Visualizations include KPI cards, Revenue by Market, Top 5
              Customers, Top 5 Products, Revenue Trend, Year & Month slicers,
              drill down by month.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">🎯 Final Outcome</h2>
            <p className="mb-2">
              The final dashboard automates sales reporting, provides real-time
              insights, tracks revenue trends, identifies top-performing markets
              and products, and reduces manual reporting time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">🚀 Business Impact</h2>
            <p>
              Enabled data-driven decision-making, improved sales strategy
              visibility, targeted cost optimization (10% savings goal), and
              saved 20% analyst time previously spent on manual data collection.
            </p>
          </section>
        </Card>
      </div>
    </div>
  );
}
