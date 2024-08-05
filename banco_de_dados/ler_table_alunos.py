import sqlite3

conn = sqlite3.connect('banco_de_dados.db')
cursor = conn.cursor()

# [
    # (0, 'id', 'INTEGER', 0, None, 1),
    # (1, 'nome', 'text', 1, None, 0), 
    # (2, 'sobrenome', 'TEXT', 0, None, 0), 
    # (3, 'nome_do_pai', 'TEXT', 0, None, 0), 
    # (4, 'nome_da_mae', 'TEXT', 0, None, 0), 
    # (5, 'data_de_nascimento', 'TEXT', 0, None, 0), 
    # (6, 'telefone', 'TEXT', 0, None, 0), 
    # (7, 'cpf', 'TEXT', 0, None, 0), 
    # (8, 'logradouro', 'TEXT', 0, None, 0), 
    # (9, 'rua', 'TEXT', 0, None, 0), 
    # (10, 'bairro', 'TEXT', 0, None, 0), 
    # (11, 'cidade', 'TEXT', 0, None, 0), 
    # (12, 'estado', 'TEXT', 0, None, 0), 
    # (13, 'cep', 'TEXT', 0, None, 0)
# ]

# SQL = """ ALTER TABLE alunos ADD COLUMN logradouro TEXT;"""
# cursor.execute(SQL)
# conn.commit()

SQL = """ SELECT * FROM alunos;"""
cursor.execute(SQL)
print(cursor.fetchall())
conn.close()