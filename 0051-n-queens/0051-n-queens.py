class Solution:
    def solveNQueens(self, n):
        #Place a queen at (i, j)
        #Mark all capture locations with '.'
        def mark(board, i, j):
            for x in range(n):
                for y in range(n):
                    if x == i or y == j or abs(x - i) == abs(y - j):
                        board[x][y] = '.'
            board[i][j] = 'Q'
                        
        
        #Place a queen on i-th row
        def recur(board, i):
            for j in range(n):
                if board[i][j] == '0':
                    unmarked = copy.deepcopy(board)
                    mark(board, i, j)
                    #Found a valid solution
                    if sum(row.count('Q') for row in board) == n:
                        res.append(copy.deepcopy(board))
                        return
                    #Go to next row
                    else:
                        recur(board, i + 1)
                    board = unmarked
        
        
        res = []
        recur([['0'] * n for _ in range(n)], 0)
        return [[''.join(row) for row in board] for board in res]