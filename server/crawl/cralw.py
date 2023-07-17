import requests
from bs4 import BeautifulSoup
import csv
import os
print(os.getcwd())
import os
if not os.path.exists('./data'):
    os.makedirs('./data')
# URL of the website to scrape
# url = "https://www.goodreads.com/search?page=1&q=book"
url = "https://www.goodreads.com/search?page=1&q=book&tab=books"

# Send a GET request to the URL
response = requests.get(url)

# Parse the HTML content of the page using BeautifulSoup
soup = BeautifulSoup(response.content, 'html.parser')

# Find all the book titles and authors on the page
titles = soup.find_all('a', class_='bookTitle')
authors = soup.find_all('a', class_='authorName')

# Create a list to store the book information
books = []

# Loop through the titles and authors and add them to the books list
for i in range(len(titles)):
    book = {}
    book['title'] = titles[i].text.strip()
    book['author'] = authors[i].text.strip()
    books.append(book)

# Specify the path and filename for the CSV file
filename = './data/books.csv'

# Open the CSV file in write mode
with open(filename, 'w', newline='') as file:
    # Create a CSV writer object
    writer = csv.writer(file)
    
    # Write the header row
    writer.writerow(['Title', 'Author'])
    
    # Loop through the books and write each one to a row in the CSV file
    for book in books:
        writer.writerow([book['title'], book['author']])
        
print("Book data has been scraped and saved to " + filename)