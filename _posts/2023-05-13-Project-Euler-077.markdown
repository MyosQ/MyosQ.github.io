---
layout: post
title: Problem 77 - Project Euler
date: 2023-05-13 00:00:00 -0000
categories: 
    - Project Euler
---

<!-- ![alt text]({{ site.baseurl }}/images/hj-fs.jpg){:height="200px" width="200px"} -->

<!-- link to projecteuler.net  -->
[Project Euler](https://projecteuler.net){:target="_blank"} is a website for practicing problem solving with mathematics and programming. It is a great way to stay in shape and challenge yourself. I have been doing these problems for quite a while. I find it really absorbing and fun.

<!-- new paragraph -->
<!-- link to problem 77 -->
[Problem 77](https://projecteuler.net/problem=77){:target="_blank"} is about prime partitions. The problem is stated as follows:

<!-- new paragraph -->
<!-- frame around -->
<div style="border: 1px solid black; padding: 10px 20px; margin-bottom: 10px">
It is possible to write ten as the sum of primes in exactly five different ways: <br>
<ul>
    <li>7 + 3</li>
    <li>5 + 5</li>
    <li>5 + 3 + 2</li>
    <li>3 + 3 + 2 + 2</li>
    <li>2 + 2 + 2 + 2 + 2</li>  
</ul>
What is the first value which can be written as the sum of primes in over five thousand different ways?
</div>

I have always found partitions to be somewhat frightening to work with. Recursion is tricky, and each unique type of partitioning problem requires a slighlty different approach. In this case, only primes may be used. 

<!-- new paragraph -->
Recursion is one of few concepts where I find going back to pen and paper actually is helpful. And thats what I did.
This was my main partition function:

```python

def get_prime_partitions(n: int, highest_prime: int = None) -> list:

    if n == 2:
        return [[2]]
    
    partitions = [[n]] if is_prime(n) else []
    highest_prime = highest_prime or 2
    for i in range(highest_prime, (n//2)+1):
        if not is_prime(i):
            continue

        partitions.extend([[i] + p for p in get_prime_partitions(n-i, i)])

    return partitions
```

It took a while before I found that passing "highest_prime" as an argument would help to avoid duplicates in the list of partitions. Otherwise, the list would contain both [3, 7] and [7, 3] for example. Could be a better way to do this, I am sure. Either way, I think I am getting the hang of partitions now...

Full code is on [Github](https://github.com/MyosQ/euler-solutions){:target="_blank"}.  
Add me as a friend on Project Euler plz: 1005342_TH9cUZhVx1MYcoOYdgvh3wpvk3APpO5p




