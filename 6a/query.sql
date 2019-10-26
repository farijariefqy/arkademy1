 $sql = mysqli_query($koneksi, "SELECT a.id,a.id_cashier, a.id_category,a.name,a.price,b.name,c.name
                                            FROM product as a INNER JOIN cashier as b INNER JOIN category as c
                                            ON a.id_cashier=b.name AND a.id_category=c.name ORDER BY a.id DESC")
                                            or die('Ada kesalahan pada query tampil Data : '.mysqli_error($koneksi));