---
title: "Basic Electronics: Boolean Algebra"
summary: "Boolean algebra, logic operations, identities, number conversion, and basic digital logic."
date: 2025-02-28 08:47:26 +0530
categories:
  - notes
  - msc
  - lecture
tags:
  - msc
  - semester-iii
  - electronics
  - boolean-algebra
  - digital-logic
permalink: /msc/sem-iii/boolean-algebra/
hidden: true
---

Boolean algebra is a mathematical structure used to perform operations on binary variables (0s and 1s). It is fundamental in digital logic design and computer science.

## Basic Boolean Operations
Boolean algebra consists of three primary operations:

1. **AND Operation (⋅)**
   - Symbol: `A ⋅ B` or `A AND B`
   - Truth Table:

     | A | B | A ⋅ B |
     |---|---|-------|
     | 0 | 0 |   0   |
     | 0 | 1 |   0   |
     | 1 | 0 |   0   |
     | 1 | 1 |   1   |

2. **OR Operation (+)**
   - Symbol: `A + B` or `A OR B`
   - Truth Table:

     | A | B | A + B |
     |---|---|-------|
     | 0 | 0 |   0   |
     | 0 | 1 |   1   |
     | 1 | 0 |   1   |
     | 1 | 1 |   1   |

3. **NOT Operation (¯)**
   - Symbol: `Ā` or `NOT A`
   - Truth Table:

     | A | Ā |
     |---|---|
     | 0 | 1 |
     | 1 | 0 |

## Boolean Identities
Boolean algebra follows several important identities:

- **Identity Laws:**  
  `A + 0 = A`, `A ⋅ 1 = A`
- **Null Laws:**  
  `A + 1 = 1`, `A ⋅ 0 = 0`
- **Idempotent Laws:**  
  `A + A = A`, `A ⋅ A = A`
- **Complement Laws:**  
  `A + Ā = 1`, `A ⋅ Ā = 0`
- **Distributive Laws:**  
  `A ⋅ (B + C) = A ⋅ B + A ⋅ C`
- **Absorption Laws:**  
  `A + (A ⋅ B) = A`, `A ⋅ (A + B) = A`

---

# Conversion of Decimal Numbers into Binary Numbers

Converting a decimal number to binary involves dividing the number by 2 repeatedly and recording the remainders.

### Steps to Convert Decimal to Binary:
1. **Divide** the decimal number by 2.
2. **Record** the remainder (0 or 1).
3. **Repeat** the process with the quotient.
4. **Reverse** the sequence of remainders to obtain the binary number.

### Example 1: Convert 13 to Binary
1. 13 ÷ 2 = 6, remainder **1**
2. 6 ÷ 2 = 3, remainder **0**
3. 3 ÷ 2 = 1, remainder **1**
4. 1 ÷ 2 = 0, remainder **1**
5. Read from bottom to top: **1101**

### Example 2: Convert 25 to Binary
1. 25 ÷ 2 = 12, remainder **1**
2. 12 ÷ 2 = 6, remainder **0**
3. 6 ÷ 2 = 3, remainder **0**
4. 3 ÷ 2 = 1, remainder **1**
5. 1 ÷ 2 = 0, remainder **1**
6. Read from bottom to top: **11001**

### Shortcut: Binary of Small Decimal Numbers

| Decimal | Binary |
|---------|--------|
| 0       | 0      |
| 1       | 1      |
| 2       | 10     |
| 3       | 11     |
| 4       | 100    |
| 5       | 101    |
| 6       | 110    |
| 7       | 111    |
| 8       | 1000   |
| 9       | 1001   |
| 10      | 1010   |

These concepts are essential for understanding digital logic design and computer arithmetic.

