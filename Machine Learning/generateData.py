import random

skills = []
projects = []
groups = []
#update below variables
skillsPerProject = 14
skillsPerGroup = 9
totalGroups = 100
totalProjects = 200
pointsFactorPerSkillMatch = 2
pointsForPreference = 12

class Project:#Project constructor class
    skills = []
    projectNumber=0
    available = True
    def __init__(self, skills, projectNumber):
        self.skills=[]
        self.projectNumber=projectNumber#allocate project number
        for x in range(0,skillsPerProject):#add n required skills to project
            self.skills.append(skills[random.randint(0,(len(skills)-1))])


class StudentGroup:#StudentGroup constructor class
    skills=[]
    groupPreferences=[]
    allocatedProject=None
    groupNumber=0
    def __init__(self, skills, groupNumber):
        self.skills=[]
        for i in range(0,3):#add 3 random preferences
            self.groupPreferences.append(random.randint(0,totalProjects))
        for x in range(0,skillsPerGroup):#add 3 random skills
            self.skills.append(skills[random.randint(0,(len(skills)-1))])
        self.groupNumber = groupNumber
        
def AllocateProjects():#allocate projects to groups      
    for i in range(len(groups)):
        bestScore=0
        for k in range(len(projects)):        
            score=sum(el in groups[i].skills for el in projects[k].skills)*pointsFactorPerSkillMatch
            if projects[k].projectNumber in groups[i].groupPreferences:
                score=score+pointsForPreference
            if score > bestScore:
                bestScore = score
                groups[i].allocatedProject=projects[k].projectNumber
        print('group ',groups[i].groupNumber,' has been allocated project ', groups[i].allocatedProject)

#driver code
with open('sampleskills.txt') as f:#read sample skills file to skills array
    skills = f.readlines()

for j in range(0,totalProjects):#generate n projects and store in list of objects
    projects.append(Project(skills, j))

for x in range(0,totalGroups):#generate n groups and store in groups[]
    groups.append(StudentGroup(skills, x))
    
AllocateProjects()




        


