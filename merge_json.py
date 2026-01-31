import json

# File paths for the JSON files to merge
files_to_merge = [
    "data/members.json",
    "data/members_x.json",
    "data/members_radio.json"
]

# Output file path
output_file = "data/members_merged.json"

# List to store merged data
merged_data = []

# Read and merge data from each file
for file_path in files_to_merge:
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            data = json.load(f)
            merged_data.extend(data)  # Add the data to the merged list
    except FileNotFoundError:
        print(f"File not found: {file_path}")
    except json.JSONDecodeError:
        print(f"Error decoding JSON in file: {file_path}")

# Update sorting logic to ensure the correct order: numeric-only, TXXXX, then LXXXX
merged_data.sort(
    key=lambda x: (
        x['会員番号'][0].isalpha(),  # Alphanumeric check: False for numeric-only
        x['会員番号'][0] == 'L',    # Prioritize 'L' after 'T'
        x['会員番号']               # Lexicographical order
    )
)

# Remove newline characters from all string fields in the merged data
for entry in merged_data:
    for key, value in entry.items():
        if isinstance(value, str):
            entry[key] = value.replace("\n", "")

# Write the corrected sorted data to the output file
try:
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(merged_data, f, ensure_ascii=False, indent=4)
    print(f"Correctly sorted, cleaned, and merged data saved to {output_file}")
except Exception as e:
    print(f"Error writing to output file: {e}")