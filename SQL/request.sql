SELECT 'January' AS month, 31 AS days
UNION ALL
SELECT 'February', CASE 
    WHEN EXTRACT(YEAR FROM CURRENT_DATE) % 4 = 0 AND (EXTRACT(YEAR FROM CURRENT_DATE) % 100 <> 0 OR EXTRACT(YEAR FROM CURRENT_DATE) % 400 = 0) THEN 29 
    ELSE 28 
END
UNION ALL
SELECT 'March', 31
UNION ALL
SELECT 'April', 30
UNION ALL
SELECT 'May', 31
UNION ALL
SELECT 'June', 30
UNION ALL
SELECT 'July', 31
UNION ALL
SELECT 'August', 31
UNION ALL
SELECT 'September', 30
UNION ALL
SELECT 'October', 31
UNION ALL
SELECT 'November', 30
UNION ALL
SELECT 'December', 31;
