USE Celcoin;

SELECT u.user_name, u.user_email,

SUM(op.order_quantity) AS quantity,

ROUND(SUM(tp.transaction_total_value), 2) AS total_value,

ROUND(AVG(tp.transaction_total_value / op.order_quantity), 2) AS ticket_average

FROM users AS u

INNER JOIN orders_product AS op ON op.order_user_id = u.user_id

INNER JOIN transactions_product AS tp ON op.order_id = tp.transaction_order_id

WHERE tp.transaction_status_id = 3
AND MONTH(tp.transaction_date) = MONTH(NOW())
AND YEAR(tp.transaction_date) = YEAR(NOW())

GROUP BY u.user_name, u.user_email;



