-- テーブルbulletinのmessageを更新する
UPDATE bulletin
SET 
  message = "test xxxx...",
  is_editing = 1
WHERE id = 0; 