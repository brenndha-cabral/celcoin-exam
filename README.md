<h1>Exam Celcoin :rocket:</h1>

<spam><i>Exam for a Backend Developer at Celcoin.</i></spam>

<h2>About</h2>

<p>● This exam contains 6 tasks where I could pratice my skills.</p>
<p>● I chose English as my primary language because it is importante for me to improve.</p>
<p>● I currently work with JavaScript technology, so I felt comfortable using this programming language.</p>

<h2>Tasks</h2>

<details>

<summary><strong>Task 1 :sparkles:</strong></summary><br/>

  <h2>Continue the sequences:</h2>

<img src="./public/assets/images/png/sequence.png"/><br/>

</details>

<details>

<summary><strong>Task 2 :sparkles:</strong></summary><br/>

<h2>The lock keyword in .NET marks a statement lock as a critical section, obtains the mutual exclusion lock for a given object.
  This instruction takes the following form:</h2>

  <p>Considering that 20 threads for the test() function are created in parallel, what will be the
     value of the variable account at the end of the statement?</p>

  <img src="./public/assets/images/png/lock-dot-net.png"/><br/>

  <p>And if we remove the keyword lock, what will be the value of the variable account at the end of the statement?</p>

  <i><h3>Answer: Despite some research to understand this method, unfortunately I didn't get enough knowledge to solve this question,
    because I'm not familiar with the technology addressed.</h3></i>

</details>

<details>

<summary><strong>Task 3 :sparkles:</strong></summary><br/>

<h2>Given the sequence of numbers: 3, 4, 9, 2, 5, 8, 2. Make an algorithm that sorts it in ascending order, presenting the sequence obtained after each step.</h2>

  <p>To sort in more detail, here I used the bubbleSort method where the recursion technique is followed.</p>
  <spam><i>Reference: https://www.section.io/engineering-education/sorting-algorithms-in-js/</i></spam><br/><br/>
  
  <img src="./public/assets/images/png/new-sorted-array-function.png"/><br/><br/>

  <p>An alternative that I normally use in my projects would be the JS sort() method that sorts the elements of the array itself and returns the array.</p>
  <spam><i>Reference: https://www.section.io/engineering-education/sorting-algorithms-in-js/](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)</i></spam><br/><br/>
  
  <img src="./public/assets/images/png/sorted-array.png"/><br/><br/>

</details>

<details>

<summary><strong>Task 4 :sparkles:</strong></summary><br/>

<h2>Look at the Entity Relationship Model and answer the questions below:</h2>
  
  <img src="./public/assets/images/png/database.png"/><br/><br/>

  <p>The report was requested where we want to know which users had at least two orders with the Transaction Status “approved” (statusTransacaoId = 3) in the current month.</p>
  
  <p>In addition to the user information (name and email), it is necessary to know the total value of transactions, the average ticket of this value and  the number of orders placed. Make a SQL query that makes this report available.</p>
  <spam>Make a SQL query that makes this report available.</spam><br/><br/>
  
  <img src="./public/assets/images/png/query.png"/><br/>

  <spam><i>To access the code, [click here](https://github.com/brenndha-cabral/celcoin-exam/blob/main/database/query.sql).</i></spam><br/><br/>
  
  <p>If it were necessary to make a Web API or Web Service to manipulate the information of the products, that is, to add a new product, to change, to consult and to delete an existing product. Define the endpoints, requests, response, data access of this API and the way the user authenticates himself to consume it safely (Justify your decisions).</p>
  
  <spam><i>The API follows the Rest standards, becoming a Restful API with CRUD endpoints. It was following the MSC architecture pattern for the development of the layers. About authentication and access, I will still study about these topics in the next few weeks (But I believe that JWT is used), what I did to validate some points was to use middewares.</i></spam>
  
  <spam><i>Get | All Products</i></spam>
  
  <img src="./public/assets/images/png/api-get-all.png"/><br/><br/>
  
  <spam><i>Get | Find Product By Id</i></spam>
  
  <img src="./public/assets/images/png/api-find-id.png"/><br/><br/>
  
  <spam><i>POST | New Product (There is validation if product exist before in database)</i></spam>
  
  <img src="./public/assets/images/png/api-validade-post-product.png"/><br/>
  <img src="./public/assets/images/png/api-post-product.png"/><br/><br/>
  
  <spam><i>PUT | Update Product By Id</i></spam>
  
  <img src="./public/assets/images/png/api-update-id.png"/><br/><br/>
  
  <spam><i>DELETE | Remove Product By Id</i></spam>
  
  <img src="./public/assets/images/png/api-delete-id.png"/><br/><br/>

</details>

<details>

<summary><strong>Task 5 :sparkles:</strong></summary><br/>

<h2>Observe the table below and indicate the existing problems in the project of this table and make an Entity Relationship Model that presents the necessary corrections.</h2>

<img src="./public/assets/images/png/table-wrong.png"/><br/>
  
  <p><i>My answer:</i></p>
  
<img src="./public/assets/images/png/entity-relationship-diagram.png"/><br/>

</details>
  
<details>

<summary><strong>Task 6 :sparkles:</strong></summary><br/>

<h2>If you were to model the operation of an ATM System (Banking Self-Service Terminal) that allows: checking the balance, making withdrawals and carrying out mobile recharges.</h2>
  
<p>● Describe the main user stories involved in this system and the exceptions that may occur in this business model;</p>
<p>● Propose a scalable and fault-resilient architecture solution for building this system. It is also important to explain the technologies, requirements and methodologies that would be used and the justifications for these choices;</p>
<p>● Define the critical paths of the system and propose tests in order to guarantee higher quality and performance for the system.</p>
  
  <p><i>My answers:</i></p>

<img src="./public/assets/images/png/user-stories.png"/><br/>
<img src="./public/assets/images/png/use-case-diagram.png"/><br/>
<img src="./public/assets/images/png/uc01-detailed-use-case-diagram.png"/><br/>
<img src="./public/assets/images/png/uc02-detailed-use-case-diagram.png"/><br/>
<img src="./public/assets/images/png/uc03-detailed-use-case-diagram.png"/><br/>
<img src="./public/assets/images/png/architecture-solution.png"/><br/>

</details>
