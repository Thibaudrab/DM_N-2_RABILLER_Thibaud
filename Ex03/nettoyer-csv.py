
import pandas as pd

df = pd.read_csv('fichieràlire.csv')

df = df[['Period', 'Data_value', 'Series_title_2']]

df = df[df['Series_title_2'].isin(['Credit', 'Debit', 'Services'])]

df = df.dropna()

df['id'] = range(1, len(df) + 1)

df.to_csv('result.csv', index=False)
