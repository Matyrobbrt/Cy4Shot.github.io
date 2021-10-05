(IDK HOW TO USE MD (also, i ran out of time for today to learn))
How to use the new 1.17 ToolTags system
1. Introduction
In the latest 1.17 Forge version, the harvestTool and harvestLevel are gone.

Why? Because Forge wanted to add the possibility of datapacks to change the ToolType of a block, and such the new tag-based tool system has been implemented.

2. ToolTypes
In order to add a ToolType to our block we need to add it to the corresponding tag. The vanilla ones are:

# Table
Tool	Tool Name
ToolType.AXE	axe
ToolType.PICKAXE	pickaxe
ToolType.SHOVEL	shovel
ToolType.HOE	hoe

Now to add the block to the respective tag we make a json file called toolName.json (check the list above; if we want the tool to be a pickaxe we would name it pickaxe.json) in data/minecraft/tags/blocks/mineable. In that file we will add:


```
{
    "replace": false,
    "values": [
        "modid:block1",
        "modid:block2" // And so on; one entry for each block you want to add to that tag
    ]
}
```


3. HarvestLevels
Harvest levels are a tools' tier. (if your block should only drop loot with the correct tool and tier, then you'll need to make sure the block has the requiresToolForDrops() property set) The vanilla ones are:

# Table
Tier	Mod	Name
Wood (0)	forge	needs_wood_tool
Gold (0)	forge	needs_gold_tool
Stone (1)	minecraft	needs_stone_tool
Iron (2)	minecraft	needs_iron_tool
Diamond (3)	minecraft	needs_diamond_tool
Netherite (4)	forge	needs_netherite_tool
Now to add the block to the respective tag we make a json file called harvestLevelName.json (check the list above; if we want the harvest level to be netherite we would name it needs_netherite_tool.json) in data/mod/tags/blocks (where mod is the mod which adds the harvest level. e.g. netherite harvest level is added by forge, while iron is added by minecraft ). In that file we will add:


```
{
    "replace": false,
    "values": [
        "modid:block1",
        "modid:block2" // And so on; one entry for each block you want to add to that tag
    ]
}
```
                        
~ Tutorial by matyrobbrt#1756