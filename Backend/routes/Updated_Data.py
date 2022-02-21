import pyodbc
import pandas as pd
import datetime

# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------$
# DB SERVER Details
server = '192.168.200.17'
database = 'Tresor'
username = 'ai'
password = 'db@tresor'
# add appropriate driver name
today = datetime.date.today()
cnxn = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};SERVER=' +
                      server+';DATABASE='+database+';UID='+username+';PWD=' + password)

cursor = cnxn.cursor()
path = "/Users/apple/Desktop/Krishan Kumar/My-Project/Inventory-Backend/routes/Updated_Data.csv"
# /Users/apple/Desktop/Krishan Kumar/My-Project/alisha-backend

# ----------------------------Item -----------
SQL_Query = pd.read_sql_query('''EXEC Item_SP;''', cnxn)
df_item = pd.DataFrame(SQL_Query)
filter_list_item_MainCategory = ["Mac", "Apple_Mac_Accessories", "iPhone",
                                 "Apple_iPhone_Accessories", "Watch", "iPad", "Music", "Accessories"]
df_item = df_item[~df_item['Item Category Name'].isin(
    filter_list_item_MainCategory)]
df_item = df_item[df_item["Subcategory"].str.contains(
    'DEMO|Demo|demo|CASH|APPLE CARE|SERVICE|SVC|Refurbished') == False]
df_item.columns = [
    'Main Category,Sub-category,Part Number,UPC/EAN,Description,SAP Part Description,MRP']
df_item = df_item.dropna()
df_item.to_csv(path+"Updated_Data.csv", index=False)
print("Item Data Fetched and updated in Updfated_Data.csv on at:",
      today, "\n Total Unique SKU's Count:", df_item.shape[0])


# filter_list_item_category_code=['A09','A48','A11','A10','A23','A31','A18']
# df_item=df_item[~df_item['Item Category Code'].isin(filter_list_item_category_code)]
# df_item=df_item[df_item["Description"].str.contains('DEMO|Demo|demo|CASH|APPLE CARE|SERVICE|SVC|Refurbished')==False]
# df_item.columns=['Item Category Code','Item Category Type','No_','Description','MRP']
# df_item=df_item.dropna()
# df_item.to_csv(path+"Complete_Data.csv",index=False)
# print("Item Data Fetched and updated in CompleteData.csv on at:",today,"\n Total Unique SKU's Count:",df_item.shape[0])
