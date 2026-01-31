import json
import openpyxl
import re
import logging

# Load the JSON data
with open('data/members.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

# Function to clean illegal characters
def clean_illegal_characters(value):
    if isinstance(value, str):
        # Remove illegal characters
        return re.sub(r'[\x00-\x1F\x7F]', '', value)
    return value

# Create a new Excel workbook
workbook = openpyxl.Workbook()
sheet = workbook.active
sheet.title = "Members"

# Add headers to the Excel sheet
headers = ["会員番号", "居住地", "名前", "年齢", "コメント"]
sheet.append(headers)

# Add logging to debug row processing
logging.basicConfig(level=logging.DEBUG, filename='debug.log', filemode='w',
                    format='%(asctime)s - %(levelname)s - %(message)s')

# Add data to the Excel sheet
for member in data:
    row = [
        clean_illegal_characters(member.get("会員番号", "")),
        clean_illegal_characters(member.get("居住地", "")),
        clean_illegal_characters(member.get("名前", "")),
        clean_illegal_characters(member.get("年齢", "")),
        clean_illegal_characters(member.get("コメント", ""))
    ]
    logging.debug(f"Adding row: {row}")  # Log each row being added
    sheet.append(row)

# Save the Excel file
workbook.save('data/かずこの会 入会希望（回答）.xlsx')