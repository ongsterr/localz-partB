## **Localz Coding Challenge: Part B**

### **Challenge Instructions**

Duration: approx 90 minutes

**The Challenge**:\
Write a simple batch job that retrieves a CSV file from a URL, which imports orders into a database. Assume there is an existing collection/table of customers and orders. Ensure that the customerId exists in the database before importing the order, otherwise skip the import for the order.

**Note**:\
timebox it! Please feel free to ask questions! Use version control, preferrably git. Add your approach to testing. Ensure the batch can handle files of varying sizes without having to scale vertically Think production ready batch that can scale with huge data (Gbs of data)

**Language**:\
node.js (and use any library or frameworks that you are comfortable with)

**Database**:\
MongoDB or Postgres

CSV header with a sample input (1 order per line): orderId,customerId,item,quantity sample-123,customer-321,Flowers,2

**Table/Collection schema**:\
Customers customerId (String) firstName (String) lastName (String) Orders orderId (String) customerId (String) item (String) quantity (Number)

**How To**:

- Batch order insert job function is save in the `jobs` folder
- To test, run `npm test`
