from os import listdir
from os.path import isfile, join
onlyfiles = [f for f in listdir("icc_mens_t20_world_cup_male_csv2") if isfile(join("icc_mens_t20_world_cup_male_csv2", f))]
print(onlyfiles)