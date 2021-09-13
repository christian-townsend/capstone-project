import random

skills = []
projects = []
groups = []
units = [9785, 9786, 10004, 10005, 10098, 11522]
#update below variables
maxGroupsPerProject=2
unitsPerProject = 2
minStudentsPerGroup=3
maxStudentsPerGroup = 5
skillsPerProject = 11
skillsPerGroup = 12
totalGroups = 200
totalProjects = 400
pointsFactorPerSkillMatch = 2
pointsForPreference = 12
pointsForGroupSize = 10

class Project:#Project constructor class
    skills = []
    relevantUnits = []
    projectGroupSize=None
    projectNumber=None
    available = True
    numGroupsForProject=None
    numGroupsAllocated=0
    def __init__(self, skills, projectNumber):
        self.skills=[]
        self.relevantUnits = []
        self.projectNumber=projectNumber#allocate project number
        self.projectGroupSize=random.randint(minStudentsPerGroup,maxStudentsPerGroup)
        self.numGroupsForProject=random.randint(1,maxGroupsPerProject)
        for i in range(0,unitsPerProject):
            self.relevantUnits.append(units[random.randint(0,len(units)-1)])
        for x in range(0,skillsPerProject):#add n required skills to project
            self.skills.append(skills[random.randint(0,(len(skills)-1))])

class StudentGroup:#StudentGroup constructor class
    skills=[]
    groupPreferences=[]
    groupSize=None
    allocatedProject=None
    groupUnit=None
    groupNumber=0
    def __init__(self, skills, groupNumber):
        self.skills=[]
        for i in range(0,3):#add 3 random preferences
            self.groupPreferences.append(random.randint(0,totalProjects))
        for x in range(0,skillsPerGroup):#add 3 random skills
            self.skills.append(skills[random.randint(0,(len(skills)-1))])
        self.groupNumber = groupNumber#give group a number
        self.groupSize=random.randint(minStudentsPerGroup,maxStudentsPerGroup)#allocate random number of students to group
        self.groupUnit = units[random.randint(0,len(units)-1)]
        
def AllocateProjects():#allocate projects to groups      
    for i in range(len(groups)):
        bestScore=0
        for k in range(len(projects)):
            if groups[i].groupUnit not in projects[k].relevantUnits:#check if group is in unit that project is available for
                continue
            if not projects[k].available:#check if project has already been allocated to max number of groups
                continue
            score=sum(el in groups[i].skills for el in projects[k].skills)*pointsFactorPerSkillMatch
            if projects[k].projectGroupSize == groups[i].groupSize:
                score=score+pointsForGroupSize
            if projects[k].projectNumber in groups[i].groupPreferences:
                score=score+pointsForPreference
            if score > bestScore:
                bestScore = score
                groups[i].allocatedProject=projects[k].projectNumber
        projects[groups[i].allocatedProject].numGroupsAllocated+=1
        if projects[groups[i].allocatedProject].numGroupsAllocated==projects[groups[i].allocatedProject].numGroupsForProject:
            projects[groups[i].allocatedProject].available=False#set project availabe to false when max number of allocations reached       
        print('group ',groups[i].groupNumber,' has been allocated project ', groups[i].allocatedProject)

#driver code
with open('sampleskills.txt') as f:#read sample skills file to skills array
    skills = f.readlines()

for j in range(0,totalProjects):#generate n projects and store in list of objects
    projects.append(Project(skills, j))

for x in range(0,totalGroups):#generate n groups and store in groups[]
    groups.append(StudentGroup(skills, x))
    
AllocateProjects()


##rand timestamp - not going to implement as will not assist with generalising neural network
##academic sponsor preferences
##units - done
##groups per project - done
##group size - done 


        


