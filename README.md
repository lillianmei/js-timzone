# js-timezone

時區實作

## -功能-
1. 顯示不同地區得時間
2. 晚上背景為黑色，白天則為白色

 

## -做法-
1. 以toLocaleString來取得時間，建立要顯示的地區資料
2. 將取得資料拆解，放入對應位置
3. 針對ampm做樣式改變
4. 每分鐘更新一次時間