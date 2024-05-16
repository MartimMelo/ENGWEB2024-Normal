import json

with open('contratos2024.json', 'r') as f:
    data = json.load(f)

# Fix the attribute "precoContratual" to float (some are numbers, others are strings)

for i in range(len(data)):
    if isinstance(data[i]['precoContratual'], str):
            preco_contratual = data[i]['precoContratual'].replace(',', '.')
            data[i]['precoContratual'] = float(preco_contratual)
    else:
        data[i]['precoContratual'] = float(data[i]['precoContratual'])

# Save the fixed data to a new file

with open('contratos2024_fixed.json', 'w') as f:
    json.dump(data, f, indent=4, ensure_ascii=False)
