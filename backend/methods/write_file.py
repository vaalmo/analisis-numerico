def writeFile(solution, chapter):
    if(chapter == 2):
            with open('./solutions/solutionsChapter2.txt', 'a+') as file:
                file.write(str(solution) + '\n')
                file.close()
    elif(chapter == 3):
        with open('./solutions/solutionsChapter3.txt', 'a+') as file:
                file.write(str(solution) + '\n')
                file.close()