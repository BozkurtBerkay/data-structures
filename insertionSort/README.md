# <strong> Insertion Sort Sorular:

## <strong> [22,27,16,2,18,6] -> Insertion Sort 

<br>
  
### 1. Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.
  
<br>
<hr>
  
![github](/images/firstArr.png)

<br>
<hr>
<br>

### 2. Big-O gösterimini yazınız:

```
1.adim: 16,22,27,2,18,6 -> n
2.adim: 2,16,22,27,18,6 -> n - 1
3.adim: 2,16,18,22,27,6 -> n - 2
4.adim: 2,6,16,18,22,27 -> 1

(n) + (n - 1) + (n - 2) + 1 => O(n**2)

```

<br>
<hr>
<br>

### 3. Time Complexity: 
<br>
  
#### Average Case: Aradığımız sayının ortada olması,
  
#### Worst Case: Aradığımız sayının sonda olması, 
  
#### Best Case: Aradığımız sayının dizinin en başında olması.
  
<br>

```
[2,6,16,18,22,27]

Average Case: 16-18
Worst Case: 27
Best Case: 2

```
<br>
<hr>
<br>

### 4.Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer?
<br>


```
Average case kapsamına girer.

```
<br>
<hr>
<br>

### 5. [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre "ilk 4 adımını" yazınız:
<br>

![github](/images/secondArr.png)

<br>
<hr>
<br>
