import os
c=1
q= os.listdir()
for i in q:
    os.rename(i,f'control-q-{c}.jpg')
    c+=1