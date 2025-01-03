
CSV ChapterData/ChapterDataTable.csv @ Things indexed by chapter.
	TABLE NewChapterDataTable ChapterData/ChapterDataTable.nmm
	TABLE GenericMusicTable ChapterData/ChapterMusicTable.nmm
	TABLE PoisonReworkGasTrapTable ChapterData/PoisonReworkGasTrapTable.nmm
	TABLE SupplyUsabilityTable ChapterData/SupplyUsabilityTable.nmm
	INLINE True
	WRITE_SEQUENTIALLY False
	MAX_ENTRIES 256

CSV Characters/CharacterTable.csv @ Things indexed by character.
	TABLE CharacterTable Characters/CharacterTable.nmm
	TABLE MagCharTable Characters/CharacterMagicTable.nmm
	TABLE CharLevelUpSkillTable Characters/CharacterLevelUpTable.nmm
	TABLE PersonalSkillTable Characters/PersonalSkillTable.nmm
	TABLE EscapeQuoteTable Characters/EscapeQuoteTable.nmm
	INLINE True
	WRITE_SEQUENTIALLY False
	MAX_ENTRIES 256

CSV Characters/SummonCharacterTable.csv @ Just summon character list.
	TABLE SummonCharacterTable Characters/SummonCharacterTable.nmm
	INLINE True
	WRITE_SEQUENTIALLY True

CSV Classes/ClassTable.csv @ Things indexed by class.
	TABLE ClassTable Classes/ClassTable.nmm
	TABLE MagClassTable Classes/ClassMagicTable.nmm
	@TABLE Classes/WalkingSoundsTable.nmm WalkingSoundsTable1
	TABLE MovingMapSpriteTable Classes/MovingSpriteTable.nmm -1
	TABLE PromotionBranchTable Classes/PromotionBranchTable.nmm -1
	TABLE Class_Level_Cap_Table Classes/ClassLevelCapTable.nmm
	TABLE ClassLevelUpSkillTable Classes/ClassLevelUpTable.nmm
	TABLE ClassSkillTable Classes/ClassSkillTable.nmm
	@ See what I mean with these being a lot to jump around between?
	INLINE TRUE
	WRITE_SEQUENTIALLY False
	MAX_ENTRIES 256

CSV ItemEffectRevamp/EffectAnimTable.csv @ List linking items to effect animations.
	TABLE UseEffectAnimTable ItemEffectRevamp/EffectAnimTable.nmm
	INLINE True
	WRITE_SEQUENTIALLY True

CSV ItemEffectRevamp/ItemAITable.csv
	TABLE AI_ItemArray ItemEffectRevamp/ItemAITable.nmm
	INLINE True
	WRITE_SEQUENTIALLY True

CSV ItemEffectRevamp/PromotionItemTable.csv
	TABLE PromotionItemTable ItemEffectRevamp/PromotionItemTable.nmm
	INLINE True
	WRITE_SEQUENTIALLY True

CSV ItemEffectRevamp/StaffAITable.csv
	TABLE AI_StaffArray ItemEffectRevamp/StaffAITable.nmm
	INLINE True
	WRITE_SEQUENTIALLY True

CSV ItemEffectRevamp/StatboosterTextTable.csv @ List linking statbooster item IDs to use text?
	TABLE StatBoosterTextTable ItemEffectRevamp/StatboosterTextTable.nmm
	INLINE True
	WRITE_SEQUENTIALLY True

CSV ItemEffectRevamp/IERevampTable.csv @ These are indexed by item effect ID.
	TABLE IERevampTable ItemEffectRevamp/ItemEffectRevampTable.nmm
	TABLE IBArray ItemEffectRevamp/ItemBoxEffectTable.nmm
	INLINE True
	WRITE_SEQUENTIALLY False

CSV Items/ItemTable.csv @ Things indexed by item.
	TABLE ItemTable Items/ItemTable.nmm
	@TABLE ItemUsabilityTable Items/ItemUsabilityTable.nmm -0x4B
	@TABLE ItemEffectTable Items/ItemEffectTable.nmm -0x4B
	@TABLE PrepScreenUsabilityTable Items/ItemPrepScreenUsabilityTable.nmm -0x5B
	@TABLE ItemTargetTable Items/ItemTargetTable.nmm -0x4B
	@TABLE IERevampTable ItemEffectRevamp/ItemEffectRevampTable.nmm -0x4B @ Including this in the item table was a mistake - IER indexes by arbitrary effect ID.
	TABLE SetPoisonItemTable Items/PoisonItemTable.nmm
	TABLE WeaponLockArrayPointerTable Items/WeaponLockTable.nmm
	INLINE True
	WRITE_SEQUENTIALLY False
	MAX_ENTRIES 256

CSV Items/SpellAssociationTable.csv @ Just for spell association.
	TABLE SpellAssociationTable Items/SpellAssociationTable.nmm
	INLINE True
	WRITE_SEQUENTIALLY True
	
CSV MapSprites/StandingSpriteTable.csv @ Standing map sprites.
	TABLE StandingMapSpriteTable MapSprites/StandingSpriteTable.nmm
	INLINE True
	WRITE_SEQUENTIALLY False
	MAX_ENTRIES 256

CSV Miscellaneous/PrepScreenTable.csv @ Just for the modular prep screen table.
	TABLE PrepScreenTable Miscellaneous/PrepScreenTable.nmm
	INLINE True
	WRITE_SEQUENTIALLY True

CSV Skills/SkillAnimationTable.csv @ Skill animations.
	TABLE SkillAnimationPointerTable Skills/SkillAnimationTable.nmm
	INLINE True
	WRITE_SEQUENTIALLY True
	
CSV Music/SoundRoomTable.csv @ Sound room.
	TABLE SoundRoom Music/SoundRoomTable.nmm
	INLINE True
	WRITE_SEQUENTIALLY True

CSV Music/SoundTable.csv @ Music table.
	TABLE MusicTable Music/SoundTable.nmm
	INLINE True
	WRITE_SEQUENTIALLY True
