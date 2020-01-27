	.cpu arm7tdmi
	.eabi_attribute 20, 1	@ Tag_ABI_FP_denormal
	.eabi_attribute 21, 1	@ Tag_ABI_FP_exceptions
	.eabi_attribute 23, 3	@ Tag_ABI_FP_number_model
	.eabi_attribute 24, 1	@ Tag_ABI_align8_needed
	.eabi_attribute 25, 1	@ Tag_ABI_align8_preserved
	.eabi_attribute 26, 1	@ Tag_ABI_enum_size
	.eabi_attribute 30, 4	@ Tag_ABI_optimization_goals
	.eabi_attribute 34, 0	@ Tag_CPU_unaligned_access
	.eabi_attribute 18, 4	@ Tag_ABI_PCS_wchar_t
	.file	"MasterCalculations.c"
@ GNU C17 (devkitARM release 53) version 9.1.0 (arm-none-eabi)
@	compiled by GNU C version 6.4.0, GMP version 6.0.0, MPFR version 3.1.2, MPC version 1.0.2, isl version none
@ GGC heuristics: --param ggc-min-expand=100 --param ggc-min-heapsize=131072
@ options passed:  -imultilib thumb
@ -iprefix c:\devkitpro\devkitarm\bin\../lib/gcc/arm-none-eabi/9.1.0/
@ -D__USES_INITFINI__ MasterCalculations.c -mcpu=arm7tdmi -mthumb
@ -mthumb-interwork -mtune=arm7tdmi -mlong-calls -march=armv4t
@ -auxbase-strip MasterCalculations.s -Os -Wall -fverbose-asm
@ options enabled:  -faggressive-loop-optimizations -fassume-phsa
@ -fauto-inc-dec -fbranch-count-reg -fcaller-saves -fcode-hoisting
@ -fcombine-stack-adjustments -fcommon -fcompare-elim -fcprop-registers
@ -fcrossjumping -fcse-follow-jumps -fdefer-pop
@ -fdelete-null-pointer-checks -fdevirtualize -fdevirtualize-speculatively
@ -fdwarf2-cfi-asm -fearly-inlining -feliminate-unused-debug-types
@ -fexpensive-optimizations -fforward-propagate -ffp-int-builtin-inexact
@ -ffunction-cse -fgcse -fgcse-lm -fgnu-runtime -fgnu-unique
@ -fguess-branch-probability -fhoist-adjacent-loads -fident -fif-conversion
@ -fif-conversion2 -findirect-inlining -finline -finline-atomics
@ -finline-functions -finline-functions-called-once
@ -finline-small-functions -fipa-bit-cp -fipa-cp -fipa-icf
@ -fipa-icf-functions -fipa-icf-variables -fipa-profile -fipa-pure-const
@ -fipa-reference -fipa-reference-addressable -fipa-sra
@ -fipa-stack-alignment -fipa-vrp -fira-hoist-pressure
@ -fira-share-save-slots -fira-share-spill-slots
@ -fisolate-erroneous-paths-dereference -fivopts -fkeep-static-consts
@ -fleading-underscore -flifetime-dse -flra-remat -flto-odr-type-merging
@ -fmath-errno -fmerge-constants -fmerge-debug-strings
@ -fmove-loop-invariants -fomit-frame-pointer -foptimize-sibling-calls
@ -fpartial-inlining -fpeephole -fpeephole2 -fplt -fprefetch-loop-arrays
@ -freg-struct-return -freorder-blocks -freorder-functions
@ -frerun-cse-after-loop -fsched-critical-path-heuristic
@ -fsched-dep-count-heuristic -fsched-group-heuristic -fsched-interblock
@ -fsched-last-insn-heuristic -fsched-pressure -fsched-rank-heuristic
@ -fsched-spec -fsched-spec-insn-heuristic -fsched-stalled-insns-dep
@ -fschedule-insns2 -fsection-anchors -fsemantic-interposition
@ -fshow-column -fshrink-wrap -fshrink-wrap-separate -fsigned-zeros
@ -fsplit-ivs-in-unroller -fsplit-wide-types -fssa-backprop -fssa-phiopt
@ -fstdarg-opt -fstore-merging -fstrict-aliasing
@ -fstrict-volatile-bitfields -fsync-libcalls -fthread-jumps
@ -ftoplevel-reorder -ftrapping-math -ftree-bit-ccp -ftree-builtin-call-dce
@ -ftree-ccp -ftree-ch -ftree-coalesce-vars -ftree-copy-prop -ftree-cselim
@ -ftree-dce -ftree-dominator-opts -ftree-dse -ftree-forwprop -ftree-fre
@ -ftree-loop-if-convert -ftree-loop-im -ftree-loop-ivcanon
@ -ftree-loop-optimize -ftree-parallelize-loops= -ftree-phiprop -ftree-pre
@ -ftree-pta -ftree-reassoc -ftree-scev-cprop -ftree-sink -ftree-slsr
@ -ftree-sra -ftree-switch-conversion -ftree-tail-merge -ftree-ter
@ -ftree-vrp -funit-at-a-time -fverbose-asm -fzero-initialized-in-bss
@ -mbe32 -mlittle-endian -mlong-calls -mpic-data-is-text-relative
@ -msched-prolog -mthumb -mthumb-interwork -mvectorize-with-neon-quad

	.text
	.syntax divided
	.macro blh to, reg
		ldr \reg, =\to
		mov lr, \reg
		.short 0xF800
		.endm
	.thumb
	.syntax unified
	.align	1
	.arch armv4t
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	FindSupport, %function
FindSupport:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	@ link register save eliminated.
@ MemoryManagement.c:13: 	for ( int i = 0 ; i < 5 ; i++ )
	movs	r3, #0	@ <retval>,
@ MemoryManagement.c:15: 		if ( unit->supports[i] == supporting ) { return i; }
	adds	r0, r0, #52	@ tmp117,
.L3:
	ldrb	r2, [r0, r3]	@ MEM[base: _13, index: _9, offset: 0B], MEM[base: _13, index: _9, offset: 0B]
@ MemoryManagement.c:15: 		if ( unit->supports[i] == supporting ) { return i; }
	cmp	r2, r1	@ MEM[base: _13, index: _9, offset: 0B], supporting
	beq	.L1		@,
@ MemoryManagement.c:13: 	for ( int i = 0 ; i < 5 ; i++ )
	adds	r3, r3, #1	@ <retval>,
@ MemoryManagement.c:13: 	for ( int i = 0 ; i < 5 ; i++ )
	cmp	r3, #5	@ <retval>,
	bne	.L3		@,
@ MemoryManagement.c:17: 	return 0xFF;
	adds	r3, r3, #250	@ <retval>,
.L1:
@ MemoryManagement.c:18: }
	movs	r0, r3	@, <retval>
	@ sp needed	@
	bx	lr
	.size	FindSupport, .-FindSupport
	.align	1
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	GetSupportLevel, %function
GetSupportLevel:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	push	{r4, lr}	@
@ MemoryManagement.c:3: {
	movs	r4, r0	@ unit, tmp122
@ MemoryManagement.c:4: 	int loc = FindSupport(unit,supporting);
	bl	FindSupport		@
@ MemoryManagement.c:5: 	if ( loc == 0xFF ) { return 0xFF; } // No support found.
	cmp	r0, #255	@ <retval>,
	beq	.L5		@,
@ MemoryManagement.c:7: 	levels >>= (3*loc);
	movs	r2, #3	@ tmp117,
	muls	r0, r2	@ tmp118, tmp117
@ MemoryManagement.c:6: 	int levels = unit->supportLevels;
	ldrh	r3, [r4, #50]	@ levels,
@ MemoryManagement.c:7: 	levels >>= (3*loc);
	asrs	r3, r3, r0	@ levels, levels, tmp118
@ MemoryManagement.c:8: 	return levels & 7; // Isolated level.
	movs	r0, #7	@ tmp120,
	ands	r0, r3	@ <retval>, levels
.L5:
@ MemoryManagement.c:9: }
	@ sp needed	@
	pop	{r4}
	pop	{r1}
	bx	r1
	.size	GetSupportLevel, .-GetSupportLevel
	.align	1
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	ToCharID, %function
ToCharID:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	push	{r4, lr}	@
@ MemoryManagement.c:150: 	if ( unit == GetUnit(1) ) { return 0xFF; }
	ldr	r3, .L13	@ tmp115,
@ MemoryManagement.c:149: {
	movs	r4, r0	@ unit, tmp118
@ MemoryManagement.c:150: 	if ( unit == GetUnit(1) ) { return 0xFF; }
	movs	r0, #1	@,
	bl	.L15		@
@ MemoryManagement.c:150: 	if ( unit == GetUnit(1) ) { return 0xFF; }
	movs	r3, #255	@ <retval>,
@ MemoryManagement.c:150: 	if ( unit == GetUnit(1) ) { return 0xFF; }
	cmp	r4, r0	@ unit, tmp119
	beq	.L10		@,
@ MemoryManagement.c:151: 	else { return unit->pCharacterData->number; }
	ldr	r3, [r4]	@ unit_7(D)->pCharacterData, unit_7(D)->pCharacterData
	ldrb	r3, [r3, #4]	@ <retval>,
.L10:
@ MemoryManagement.c:152: }
	movs	r0, r3	@, <retval>
	@ sp needed	@
	pop	{r4}
	pop	{r1}
	bx	r1
.L14:
	.align	2
.L13:
	.word	GetUnit
	.size	ToCharID, .-ToCharID
	.align	1
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	GetBonusByCharacter, %function
GetBonusByCharacter:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	push	{r3, r4, r5, r6, r7, lr}	@
@ MasterCalculations.c:230: {
	movs	r7, r1	@ unit, tmp150
	movs	r4, r0	@ bonuses, tmp149
@ MasterCalculations.c:231: 	int level = GetSupportLevel(unit,supporting);
	movs	r1, r2	@, supporting
	movs	r0, r7	@, unit
@ MasterCalculations.c:230: {
	movs	r6, r2	@ supporting, tmp151
@ MasterCalculations.c:231: 	int level = GetSupportLevel(unit,supporting);
	bl	GetSupportLevel		@
	movs	r5, r0	@ level, tmp152
@ MasterCalculations.c:232: 	if ( level == 0xFF ) { return; } // No support. End.
	cmp	r0, #255	@ level,
	beq	.L16		@,
@ MasterCalculations.c:233: 	BonusStruct* entry = GetSupportTableEntry(ToCharID(unit),supporting,level);
	movs	r0, r7	@, unit
	bl	ToCharID		@
	ldr	r1, .L29	@ ivtmp.90,
@ MasterCalculations.c:245: 	for ( int i = 0 ; SupportBonusTable[i].char1 != 0 && SupportBonusTable[i].char2 != 0 ; i++ )
	movs	r3, #0	@ i,
	movs	r7, r1	@ ivtmp.90, ivtmp.90
.L18:
@ MasterCalculations.c:245: 	for ( int i = 0 ; SupportBonusTable[i].char1 != 0 && SupportBonusTable[i].char2 != 0 ; i++ )
	ldrb	r2, [r1]	@ _17, MEM[base: _34, offset: 0B]
	mov	ip, r2	@ _17, _17
@ MasterCalculations.c:245: 	for ( int i = 0 ; SupportBonusTable[i].char1 != 0 && SupportBonusTable[i].char2 != 0 ; i++ )
	cmp	r2, #0	@ _17,
	beq	.L16		@,
@ MasterCalculations.c:245: 	for ( int i = 0 ; SupportBonusTable[i].char1 != 0 && SupportBonusTable[i].char2 != 0 ; i++ )
	ldrb	r2, [r1, #1]	@ _19, MEM[base: _34, offset: 1B]
@ MasterCalculations.c:245: 	for ( int i = 0 ; SupportBonusTable[i].char1 != 0 && SupportBonusTable[i].char2 != 0 ; i++ )
	cmp	r2, #0	@ _19,
	bne	.L23		@,
.L16:
@ MasterCalculations.c:241: }
	@ sp needed	@
	pop	{r3, r4, r5, r6, r7}
	pop	{r0}
	bx	r0
.L23:
@ MasterCalculations.c:247: 		if ( ( char1 == SupportBonusTable[i].char1 && char2 == SupportBonusTable[i].char2 )
	cmp	r0, ip	@ _1, _17
	bne	.L19		@,
@ MasterCalculations.c:247: 		if ( ( char1 == SupportBonusTable[i].char1 && char2 == SupportBonusTable[i].char2 )
	cmp	r6, r2	@ supporting, _19
	beq	.L20		@,
.L19:
@ MasterCalculations.c:248: 			|| ( char2 == SupportBonusTable[i].char1 && char1 == SupportBonusTable[i].char2 ) )
	cmp	r6, ip	@ supporting, _17
	bne	.L21		@,
@ MasterCalculations.c:248: 			|| ( char2 == SupportBonusTable[i].char1 && char1 == SupportBonusTable[i].char2 ) )
	cmp	r0, r2	@ _1, _19
	beq	.L20		@,
.L21:
@ MasterCalculations.c:245: 	for ( int i = 0 ; SupportBonusTable[i].char1 != 0 && SupportBonusTable[i].char2 != 0 ; i++ )
	adds	r3, r3, #1	@ i,
	adds	r1, r1, #44	@ ivtmp.90,
	b	.L18		@
.L20:
	movs	r2, #44	@ tmp135,
	movs	r0, #6	@ tmp137,
	muls	r3, r2	@ tmp136, tmp135
@ MasterCalculations.c:245: 	for ( int i = 0 ; SupportBonusTable[i].char1 != 0 && SupportBonusTable[i].char2 != 0 ; i++ )
	movs	r2, #0	@ i,
	muls	r5, r0	@ tmp138, tmp137
	adds	r3, r3, r5	@ tmp139, tmp136, tmp138
	adds	r3, r3, #2	@ tmp140,
	adds	r3, r7, r3	@ _32, ivtmp.90, tmp140
.L24:
@ MasterCalculations.c:238: 			bonuses->vals[i] += entry->vals[i];
	ldrb	r1, [r4, r2]	@ MEM[base: bonuses_14(D), index: _7, offset: 0B], MEM[base: bonuses_14(D), index: _7, offset: 0B]
	ldrb	r0, [r3, r2]	@ MEM[base: _32, index: _7, offset: 0B], MEM[base: _32, index: _7, offset: 0B]
	adds	r1, r1, r0	@ tmp146, MEM[base: bonuses_14(D), index: _7, offset: 0B], MEM[base: _32, index: _7, offset: 0B]
	strb	r1, [r4, r2]	@ tmp146, MEM[base: bonuses_14(D), index: _7, offset: 0B]
@ MasterCalculations.c:236: 		for ( int i = 0 ; i < 6 ; i++ )
	adds	r2, r2, #1	@ i,
@ MasterCalculations.c:236: 		for ( int i = 0 ; i < 6 ; i++ )
	cmp	r2, #6	@ i,
	bne	.L24		@,
	b	.L16		@
.L30:
	.align	2
.L29:
	.word	SupportBonusTable
	.size	GetBonusByCharacter, .-GetBonusByCharacter
	.align	1
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	GetCharacterEvents, %function
GetCharacterEvents:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	push	{r4, lr}	@
@ UnitMenu.c:82: 	return (CharacterEvent*)GetChapterEvents(gChapterData.chapterIndex)[1];
	ldr	r3, .L32	@ tmp114,
@ UnitMenu.c:82: 	return (CharacterEvent*)GetChapterEvents(gChapterData.chapterIndex)[1];
	ldrb	r0, [r3, #14]	@ tmp115,
	ldr	r3, .L32+4	@ tmp116,
	bl	.L15		@
@ UnitMenu.c:83: }
	@ sp needed	@
@ UnitMenu.c:82: 	return (CharacterEvent*)GetChapterEvents(gChapterData.chapterIndex)[1];
	ldr	r0, [r0, #4]	@ MEM[(const void * *)_3 + 4B], MEM[(const void * *)_3 + 4B]
@ UnitMenu.c:83: }
	pop	{r4}
	pop	{r1}
	bx	r1
.L33:
	.align	2
.L32:
	.word	gChapterData
	.word	GetChapterEvents
	.size	GetCharacterEvents, .-GetCharacterEvents
	.align	1
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	CountSupports, %function
CountSupports:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
@ MemoryManagement.c:104: 	if ( unit->index >> 6 ) { return 0; } // If not player, no supports.
	movs	r1, #11	@ tmp120,
@ MemoryManagement.c:103: {
	push	{r4, lr}	@
@ MemoryManagement.c:103: {
	movs	r3, r0	@ unit, tmp131
@ MemoryManagement.c:104: 	if ( unit->index >> 6 ) { return 0; } // If not player, no supports.
	ldrsb	r1, [r0, r1]	@ tmp120,
@ MemoryManagement.c:104: 	if ( unit->index >> 6 ) { return 0; } // If not player, no supports.
	movs	r0, #0	@ <retval>,
@ MemoryManagement.c:104: 	if ( unit->index >> 6 ) { return 0; } // If not player, no supports.
	asrs	r1, r1, #6	@ tmp123, tmp120,
	cmp	r1, r0	@ tmp123,
	bne	.L34		@,
	movs	r2, r3	@ ivtmp.102, unit
@ MemoryManagement.c:105: 	int count = 0;
	movs	r0, r1	@ <retval>, tmp123
	adds	r2, r2, #52	@ ivtmp.102,
	adds	r3, r3, #57	@ _21,
.L37:
@ MemoryManagement.c:108: 		if ( unit->supports[i] ) { count++; }
	ldrb	r1, [r2]	@ MEM[base: _19, offset: 0B], MEM[base: _19, offset: 0B]
@ MemoryManagement.c:108: 		if ( unit->supports[i] ) { count++; }
	subs	r4, r1, #1	@ tmp130, MEM[base: _19, offset: 0B]
	sbcs	r1, r1, r4	@ tmp129, MEM[base: _19, offset: 0B], tmp130
	adds	r2, r2, #1	@ ivtmp.102,
	adds	r0, r0, r1	@ <retval>, <retval>, tmp129
@ MemoryManagement.c:106: 	for ( int i = 0 ; i < 5 ; i++ )
	cmp	r2, r3	@ ivtmp.102, _21
	bne	.L37		@,
.L34:
@ MemoryManagement.c:111: }
	@ sp needed	@
	pop	{r4}
	pop	{r1}
	bx	r1
	.size	CountSupports, .-CountSupports
	.align	1
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	CopyString, %function
CopyString:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	@ link register save eliminated.
@ EventCalls.c:55: {
	movs	r3, r0	@ origin, tmp125
@ EventCalls.c:57: 	if ( *origin == 0 )
	ldrb	r0, [r0]	@ *origin_8(D), *origin_8(D)
	cmp	r0, #0	@ *origin_8(D),
	bne	.L45		@,
@ EventCalls.c:59: 		*dest = 0;
	strb	r0, [r1]	@ *origin_8(D), *dest_9(D)
.L42:
@ EventCalls.c:70: }
	@ sp needed	@
	bx	lr
.L45:
@ EventCalls.c:56: 	int l = 0;
	movs	r0, #0	@ <retval>,
.L43:
@ EventCalls.c:65: 			*(dest+l) = *(origin+l);
	ldrb	r2, [r3, r0]	@ _16, MEM[base: origin_8(D), index: _3, offset: 0B]
@ EventCalls.c:65: 			*(dest+l) = *(origin+l);
	strb	r2, [r1, r0]	@ _16, MEM[base: dest_9(D), index: _3, offset: 0B]
@ EventCalls.c:66: 			l++;
	adds	r0, r0, #1	@ <retval>,
@ EventCalls.c:67: 		} while ( *(origin+l) != 0 );
	ldrb	r2, [r3, r0]	@ MEM[base: origin_8(D), index: _24, offset: 0B], MEM[base: origin_8(D), index: _24, offset: 0B]
	cmp	r2, #0	@ MEM[base: origin_8(D), index: _24, offset: 0B],
	bne	.L43		@,
	b	.L42		@
	.size	CopyString, .-CopyString
	.align	1
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	SupportPopup, %function
SupportPopup:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	push	{r4, lr}	@
@ EventCalls.c:48: {
	movs	r4, r0	@ parent, tmp118
@ EventCalls.c:49: 	CopyString(SupportLevelNameTable[level],&SupportLevelNameForPopup);
	ldr	r2, .L48	@ tmp114,
	lsls	r3, r1, #2	@ tmp115, tmp119,
	ldr	r0, [r3, r2]	@, SupportLevelNameTable
	ldr	r1, .L48+4	@,
	bl	CopyString		@
@ EventCalls.c:51: 	Popup_Create(&SupportPopupDefinitions,90,0,parent);
	movs	r3, r4	@, parent
	movs	r2, #0	@,
	movs	r1, #90	@,
	ldr	r0, .L48+8	@,
	ldr	r4, .L48+12	@ tmp117,
	bl	.L50		@
@ EventCalls.c:52: }
	@ sp needed	@
	pop	{r4}
	pop	{r0}
	bx	r0
.L49:
	.align	2
.L48:
	.word	SupportLevelNameTable
	.word	SupportLevelNameForPopup
	.word	SupportPopupDefinitions
	.word	Popup_Create
	.size	SupportPopup, .-SupportPopup
	.align	1
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	ToUnit, %function
ToUnit:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	push	{r4, lr}	@
@ MemoryManagement.c:144: 	if ( charID == 0xFF) { return GetUnit(1); }
	cmp	r0, #255	@ charID,
	bne	.L52		@,
@ MemoryManagement.c:144: 	if ( charID == 0xFF) { return GetUnit(1); }
	ldr	r3, .L55	@ tmp113,
	subs	r0, r0, #254	@,
.L54:
@ MemoryManagement.c:145: 	else { return GetUnitByCharId(charID); }
	bl	.L15		@
@ MemoryManagement.c:146: }
	@ sp needed	@
	pop	{r4}
	pop	{r1}
	bx	r1
.L52:
@ MemoryManagement.c:145: 	else { return GetUnitByCharId(charID); }
	lsls	r0, r0, #24	@ tmp114, charID,
	ldr	r3, .L55+4	@ tmp116,
	lsrs	r0, r0, #24	@ tmp114, tmp114,
	b	.L54		@
.L56:
	.align	2
.L55:
	.word	GetUnit
	.word	GetUnitByCharId
	.size	ToUnit, .-ToUnit
	.align	1
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	AddSupport, %function
AddSupport:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	push	{r3, r4, r5, r6, r7, lr}	@
@ MemoryManagement.c:21: {
	movs	r4, r0	@ unit, tmp155
	movs	r6, r1	@ supporting, tmp156
@ MemoryManagement.c:22: 	if ( FindSupport(unit,supporting) != 0xFF ) { return 0; } // They already have a support!
	bl	FindSupport		@
@ MemoryManagement.c:22: 	if ( FindSupport(unit,supporting) != 0xFF ) { return 0; } // They already have a support!
	cmp	r0, #255	@ tmp157,
	bne	.L58		@,
@ MemoryManagement.c:23: 	int thisCharID = ToCharID(unit);
	movs	r0, r4	@, unit
	bl	ToCharID		@
	movs	r7, r0	@ thisCharID, tmp158
@ MemoryManagement.c:24: 	Unit* otherUnit = ToUnit(supporting);
	movs	r0, r6	@, supporting
	bl	ToUnit		@
	movs	r5, r0	@ otherUnit, tmp159
@ MemoryManagement.c:25: 	if ( CountSupports(unit) == 5 || CountSupports(otherUnit) == 5 ) { return 0; } // At least one of the characters has full supports.
	movs	r0, r4	@, unit
	bl	CountSupports		@
@ MemoryManagement.c:25: 	if ( CountSupports(unit) == 5 || CountSupports(otherUnit) == 5 ) { return 0; } // At least one of the characters has full supports.
	cmp	r0, #5	@ tmp160,
	beq	.L58		@,
@ MemoryManagement.c:25: 	if ( CountSupports(unit) == 5 || CountSupports(otherUnit) == 5 ) { return 0; } // At least one of the characters has full supports.
	movs	r0, r5	@, otherUnit
	bl	CountSupports		@
@ MemoryManagement.c:25: 	if ( CountSupports(unit) == 5 || CountSupports(otherUnit) == 5 ) { return 0; } // At least one of the characters has full supports.
	cmp	r0, #5	@ tmp161,
	beq	.L58		@,
	movs	r0, #52	@ tmp137,
	movs	r1, r4	@ ivtmp.129, unit
	rsbs	r0, r0, #0	@ tmp137, tmp137
	adds	r1, r1, #52	@ ivtmp.129,
	subs	r0, r0, r4	@ tmp136, tmp137, unit
.L59:
	adds	r3, r0, r1	@ _46, tmp136, ivtmp.129
	adds	r1, r1, #1	@ ivtmp.129,
@ MemoryManagement.c:28: 		if ( unit->supports[i] == 0 )
	subs	r2, r1, #1	@ tmp138, ivtmp.129,
@ MemoryManagement.c:28: 		if ( unit->supports[i] == 0 )
	ldrb	r2, [r2]	@ MEM[base: _47, offset: 4294967295B], MEM[base: _47, offset: 4294967295B]
	cmp	r2, #0	@ MEM[base: _47, offset: 4294967295B],
	bne	.L59		@,
@ MemoryManagement.c:30: 			unit->supports[i] = supporting;
	adds	r3, r4, r3	@ tmp140, unit, _46
	adds	r3, r3, #52	@ tmp143,
@ MemoryManagement.c:31: 			SetSupport(unit,supporting,0);
	movs	r1, r6	@, supporting
	movs	r0, r4	@, unit
@ MemoryManagement.c:30: 			unit->supports[i] = supporting;
	strb	r6, [r3]	@ supporting, unit_5(D)->supports
@ MemoryManagement.c:31: 			SetSupport(unit,supporting,0);
	bl	SetSupport		@
	movs	r0, #52	@ tmp146,
	movs	r1, r5	@ ivtmp.121, otherUnit
	rsbs	r0, r0, #0	@ tmp146, tmp146
	adds	r1, r1, #52	@ ivtmp.121,
	subs	r0, r0, r5	@ tmp145, tmp146, otherUnit
.L60:
	adds	r3, r0, r1	@ _36, tmp145, ivtmp.121
	adds	r1, r1, #1	@ ivtmp.121,
@ MemoryManagement.c:37: 		if ( otherUnit->supports[i] == 0 )
	subs	r2, r1, #1	@ tmp147, ivtmp.121,
@ MemoryManagement.c:37: 		if ( otherUnit->supports[i] == 0 )
	ldrb	r2, [r2]	@ MEM[base: _37, offset: 4294967295B], MEM[base: _37, offset: 4294967295B]
	cmp	r2, #0	@ MEM[base: _37, offset: 4294967295B],
	bne	.L60		@,
@ MemoryManagement.c:39: 			otherUnit->supports[i] = thisCharID;
	adds	r3, r5, r3	@ tmp149, otherUnit, _36
	adds	r3, r3, #52	@ tmp152,
@ MemoryManagement.c:40: 			SetSupport(otherUnit,thisCharID,0);
	movs	r1, r7	@, thisCharID
	movs	r0, r5	@, otherUnit
@ MemoryManagement.c:39: 			otherUnit->supports[i] = thisCharID;
	strb	r7, [r3]	@ thisCharID, otherUnit_10->supports
@ MemoryManagement.c:40: 			SetSupport(otherUnit,thisCharID,0);
	bl	SetSupport		@
@ MemoryManagement.c:41: 			return 1;
	movs	r0, #1	@ <retval>,
.L57:
@ MemoryManagement.c:44: }
	@ sp needed	@
	pop	{r3, r4, r5, r6, r7}
	pop	{r1}
	bx	r1
.L58:
@ MemoryManagement.c:22: 	if ( FindSupport(unit,supporting) != 0xFF ) { return 0; } // They already have a support!
	movs	r0, #0	@ <retval>,
	b	.L57		@
	.size	AddSupport, .-AddSupport
	.align	1
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	SetSupport, %function
SetSupport:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 8
	@ frame_needed = 0, uses_anonymous_args = 0
	push	{r0, r1, r2, r4, r5, r6, r7, lr}	@
@ MemoryManagement.c:47: {
	movs	r7, r1	@ supporting, tmp188
	str	r2, [sp]	@ tmp189, %sfp
	movs	r4, r0	@ unit, tmp187
@ MemoryManagement.c:48: 	int thisCharID = ToCharID(unit);
	bl	ToCharID		@
	str	r0, [sp, #4]	@ tmp190, %sfp
@ MemoryManagement.c:49: 	Unit* otherUnit = ToUnit(supporting);
	movs	r0, r7	@, supporting
	bl	ToUnit		@
@ MemoryManagement.c:50: 	if ( level < 0 || level > MaxSupportLevel ) { return 0; } // Ensure the level passed in is within the valid range.
	ldr	r3, .L78	@ tmp150,
@ MemoryManagement.c:50: 	if ( level < 0 || level > MaxSupportLevel ) { return 0; } // Ensure the level passed in is within the valid range.
	ldr	r2, [sp]	@ level, %sfp
	ldrb	r3, [r3]	@ MaxSupportLevel, MaxSupportLevel
@ MemoryManagement.c:49: 	Unit* otherUnit = ToUnit(supporting);
	movs	r6, r0	@ otherUnit, tmp191
@ MemoryManagement.c:50: 	if ( level < 0 || level > MaxSupportLevel ) { return 0; } // Ensure the level passed in is within the valid range.
	cmp	r3, r2	@ MaxSupportLevel, level
	bcs	.L71		@,
.L74:
@ MemoryManagement.c:50: 	if ( level < 0 || level > MaxSupportLevel ) { return 0; } // Ensure the level passed in is within the valid range.
	movs	r0, #0	@ <retval>,
.L70:
@ MemoryManagement.c:66: }
	@ sp needed	@
	pop	{r1, r2, r3, r4, r5, r6, r7}
	pop	{r1}
	bx	r1
.L71:
@ MemoryManagement.c:51: 	int loc1 = FindSupport(unit,supporting);
	movs	r1, r7	@, supporting
	movs	r0, r4	@, unit
	bl	FindSupport		@
	movs	r5, r0	@ loc1, tmp192
@ MemoryManagement.c:52: 	if ( loc1 == 0xFF )
	cmp	r0, #255	@ loc1,
	bne	.L73		@,
@ MemoryManagement.c:55: 		if ( !AddSupport(unit,supporting) ) { return 0; } // Adding a support failed.
	movs	r1, r7	@, supporting
	movs	r0, r4	@, unit
	bl	AddSupport		@
@ MemoryManagement.c:55: 		if ( !AddSupport(unit,supporting) ) { return 0; } // Adding a support failed.
	cmp	r0, #0	@ tmp193,
	beq	.L74		@,
@ MemoryManagement.c:56: 		loc1 = FindSupport(unit,supporting);
	movs	r1, r7	@, supporting
	movs	r0, r4	@, unit
	bl	FindSupport		@
	movs	r5, r0	@ loc1, tmp194
.L73:
@ MemoryManagement.c:58: 	int loc2 = FindSupport(otherUnit,thisCharID);
	ldr	r1, [sp, #4]	@, %sfp
	movs	r0, r6	@, otherUnit
	bl	FindSupport		@
@ MemoryManagement.c:60: 	unit->supportLevels &= ~(7<<(loc1*3)); // Clear the levels. This should be equivalent to bic.
	movs	r2, #7	@ tmp154,
@ MemoryManagement.c:60: 	unit->supportLevels &= ~(7<<(loc1*3)); // Clear the levels. This should be equivalent to bic.
	movs	r3, #3	@ tmp152,
@ MemoryManagement.c:60: 	unit->supportLevels &= ~(7<<(loc1*3)); // Clear the levels. This should be equivalent to bic.
	movs	r7, r2	@ tmp153, tmp154
@ MemoryManagement.c:60: 	unit->supportLevels &= ~(7<<(loc1*3)); // Clear the levels. This should be equivalent to bic.
	muls	r5, r3	@ _6, tmp152
@ MemoryManagement.c:61: 	otherUnit->supportLevels &= ~(7<<(loc2*3));
	muls	r3, r0	@ _14, tmp195
@ MemoryManagement.c:60: 	unit->supportLevels &= ~(7<<(loc1*3)); // Clear the levels. This should be equivalent to bic.
	lsls	r7, r7, r5	@ tmp153, tmp153, _6
@ MemoryManagement.c:61: 	otherUnit->supportLevels &= ~(7<<(loc2*3));
	lsls	r2, r2, r3	@ tmp164, tmp154, _14
@ MemoryManagement.c:60: 	unit->supportLevels &= ~(7<<(loc1*3)); // Clear the levels. This should be equivalent to bic.
	ldrh	r1, [r4, #50]	@ tmp159,
	bics	r1, r7	@ tmp160, tmp153
	strh	r1, [r4, #50]	@ tmp160, unit_37(D)->supportLevels
@ MemoryManagement.c:61: 	otherUnit->supportLevels &= ~(7<<(loc2*3));
	ldrh	r1, [r6, #50]	@ tmp170,
	bics	r1, r2	@ tmp171, tmp164
	strh	r1, [r6, #50]	@ tmp171, otherUnit_42->supportLevels
@ MemoryManagement.c:63: 	unit->supportLevels |= level << (loc1*3);
	ldr	r1, [sp]	@ tmp174, %sfp
	lsls	r1, r1, r5	@ tmp174, tmp174, _6
@ MemoryManagement.c:63: 	unit->supportLevels |= level << (loc1*3);
	ldrh	r2, [r4, #50]	@ tmp176,
	orrs	r2, r1	@ tmp178, tmp174
	strh	r2, [r4, #50]	@ tmp178, unit_37(D)->supportLevels
@ MemoryManagement.c:64: 	otherUnit->supportLevels |= level << (loc2*3);
	ldr	r2, [sp]	@ level, %sfp
	lsls	r2, r2, r3	@ level, level, _14
@ MemoryManagement.c:64: 	otherUnit->supportLevels |= level << (loc2*3);
	ldrh	r3, [r6, #50]	@ tmp182,
	orrs	r2, r3	@ tmp184, tmp182
@ MemoryManagement.c:65: 	return 1;
	movs	r0, #1	@ <retval>,
@ MemoryManagement.c:64: 	otherUnit->supportLevels |= level << (loc2*3);
	strh	r2, [r6, #50]	@ tmp184, otherUnit_42->supportLevels
@ MemoryManagement.c:65: 	return 1;
	b	.L70		@
.L79:
	.align	2
.L78:
	.word	MaxSupportLevel
	.size	SetSupport, .-SetSupport
	.align	1
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	CanUnitsSupport, %function
CanUnitsSupport:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	push	{r4, r5, r6, lr}	@
@ MemoryManagement.c:114: {
	movs	r5, r0	@ unit, tmp137
	movs	r6, r1	@ otherChar, tmp138
	movs	r4, r2	@ level, tmp139
@ MemoryManagement.c:115: 	if ( level == 0xFF ) { level = GetSupportLevel(unit,otherChar)+1; }
	cmp	r2, #255	@ level,
	bne	.L81		@,
@ MemoryManagement.c:115: 	if ( level == 0xFF ) { level = GetSupportLevel(unit,otherChar)+1; }
	bl	GetSupportLevel		@
@ MemoryManagement.c:115: 	if ( level == 0xFF ) { level = GetSupportLevel(unit,otherChar)+1; }
	adds	r4, r0, #1	@ level, tmp140,
.L81:
@ MemoryManagement.c:116: 	if ( level == 0 )
	cmp	r4, #0	@ level,
	bne	.L82		@,
@ MemoryManagement.c:119: 		return CountSupports(unit) < 5 && CountSupports(ToUnit(otherChar)) < 5 && FindSupport(unit,otherChar) == 0xFF;
	movs	r0, r5	@, unit
	bl	CountSupports		@
@ MemoryManagement.c:119: 		return CountSupports(unit) < 5 && CountSupports(ToUnit(otherChar)) < 5 && FindSupport(unit,otherChar) == 0xFF;
	cmp	r0, #4	@ tmp141,
	ble	.L83		@,
.L85:
	movs	r0, #0	@ <retval>,
.L80:
@ MemoryManagement.c:126: }
	@ sp needed	@
	pop	{r4, r5, r6}
	pop	{r1}
	bx	r1
.L83:
@ MemoryManagement.c:119: 		return CountSupports(unit) < 5 && CountSupports(ToUnit(otherChar)) < 5 && FindSupport(unit,otherChar) == 0xFF;
	movs	r0, r6	@, otherChar
	bl	ToUnit		@
	bl	CountSupports		@
@ MemoryManagement.c:119: 		return CountSupports(unit) < 5 && CountSupports(ToUnit(otherChar)) < 5 && FindSupport(unit,otherChar) == 0xFF;
	cmp	r0, #4	@ tmp143,
	bgt	.L85		@,
@ MemoryManagement.c:119: 		return CountSupports(unit) < 5 && CountSupports(ToUnit(otherChar)) < 5 && FindSupport(unit,otherChar) == 0xFF;
	movs	r1, r6	@, otherChar
	movs	r0, r5	@, unit
	bl	FindSupport		@
@ MemoryManagement.c:119: 		return CountSupports(unit) < 5 && CountSupports(ToUnit(otherChar)) < 5 && FindSupport(unit,otherChar) == 0xFF;
	subs	r0, r0, #255	@ tmp127,
.L86:
@ MemoryManagement.c:119: 		return CountSupports(unit) < 5 && CountSupports(ToUnit(otherChar)) < 5 && FindSupport(unit,otherChar) == 0xFF;
	rsbs	r4, r0, #0	@ tmp135, tmp134
	adcs	r0, r0, r4	@ <retval>, tmp134, tmp135
	b	.L80		@
.L82:
@ MemoryManagement.c:124: 		return level > 0 && level <= MaxSupportLevel && GetSupportLevel(unit,otherChar) == level-1;
	cmp	r4, #0	@ level,
	ble	.L85		@,
@ MemoryManagement.c:124: 		return level > 0 && level <= MaxSupportLevel && GetSupportLevel(unit,otherChar) == level-1;
	ldr	r3, .L87	@ tmp129,
	ldrb	r3, [r3]	@ MaxSupportLevel, MaxSupportLevel
@ MemoryManagement.c:124: 		return level > 0 && level <= MaxSupportLevel && GetSupportLevel(unit,otherChar) == level-1;
	cmp	r3, r4	@ MaxSupportLevel, level
	blt	.L85		@,
@ MemoryManagement.c:124: 		return level > 0 && level <= MaxSupportLevel && GetSupportLevel(unit,otherChar) == level-1;
	movs	r1, r6	@, otherChar
	movs	r0, r5	@, unit
	bl	GetSupportLevel		@
@ MemoryManagement.c:124: 		return level > 0 && level <= MaxSupportLevel && GetSupportLevel(unit,otherChar) == level-1;
	subs	r4, r4, #1	@ tmp131,
@ MemoryManagement.c:124: 		return level > 0 && level <= MaxSupportLevel && GetSupportLevel(unit,otherChar) == level-1;
	subs	r0, r4, r0	@ tmp134, tmp131, tmp145
	b	.L86		@
.L88:
	.align	2
.L87:
	.word	MaxSupportLevel
	.size	CanUnitsSupport, .-CanUnitsSupport
	.align	1
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	FindValidConvo.isra.0, %function
FindValidConvo.isra.0:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 8
	@ frame_needed = 0, uses_anonymous_args = 0
	push	{r0, r1, r2, r4, r5, r6, r7, lr}	@
@ UnitMenu.c:86: static CharacterEvent* FindValidConvo(CharacterEvent* event, Unit* active, int target, int checkAdjacent, int checkConvo)
	str	r3, [sp, #4]	@ tmp157, %sfp
@ UnitMenu.c:88: 	int char1 = active->pCharacterData->number;
	ldr	r3, [r1]	@ tmp162, active_1(D)->pCharacterData
@ UnitMenu.c:86: static CharacterEvent* FindValidConvo(CharacterEvent* event, Unit* active, int target, int checkAdjacent, int checkConvo)
	movs	r4, r0	@ event, tmp154
@ UnitMenu.c:90: 	if ( ToUnit(char2)->state & US_RESCUED ) { return NULL; } // No convos with rescued unis!
	movs	r0, r2	@, target
@ UnitMenu.c:88: 	int char1 = active->pCharacterData->number;
	ldrb	r7, [r3, #4]	@ _3,
@ UnitMenu.c:86: static CharacterEvent* FindValidConvo(CharacterEvent* event, Unit* active, int target, int checkAdjacent, int checkConvo)
	movs	r6, r1	@ active, tmp155
	movs	r5, r2	@ target, tmp156
@ UnitMenu.c:90: 	if ( ToUnit(char2)->state & US_RESCUED ) { return NULL; } // No convos with rescued unis!
	bl	ToUnit		@
@ UnitMenu.c:90: 	if ( ToUnit(char2)->state & US_RESCUED ) { return NULL; } // No convos with rescued unis!
	ldr	r3, [r0, #12]	@ _5->state, _5->state
@ UnitMenu.c:90: 	if ( ToUnit(char2)->state & US_RESCUED ) { return NULL; } // No convos with rescued unis!
	lsls	r3, r3, #26	@ tmp161, _5->state,
	bpl	.L90		@,
.L101:
@ UnitMenu.c:90: 	if ( ToUnit(char2)->state & US_RESCUED ) { return NULL; } // No convos with rescued unis!
	movs	r4, #0	@ event,
.L91:
@ UnitMenu.c:105: }
	movs	r0, r4	@, event
	@ sp needed	@
	pop	{r1, r2, r3, r4, r5, r6, r7}
	pop	{r1}
	bx	r1
.L100:
@ UnitMenu.c:93: 		if ( event->usability != CHARSupportConvoUsability ) { continue; } // This isn't a support convo.	
	ldr	r3, .L105	@ tmp146,
	ldr	r2, [r4, #12]	@ tmp163, MEM[base: event_8, offset: 12B]
	cmp	r2, r3	@ tmp163, tmp146
	beq	.L92		@,
.L95:
@ UnitMenu.c:91: 	for ( ; event->identifier != 0 ; event++ )
	adds	r4, r4, #16	@ event,
.L90:
@ UnitMenu.c:91: 	for ( ; event->identifier != 0 ; event++ )
	ldrh	r3, [r4]	@ MEM[base: event_8, offset: 0B], MEM[base: event_8, offset: 0B]
	cmp	r3, #0	@ MEM[base: event_8, offset: 0B],
	bne	.L100		@,
	b	.L101		@
.L92:
@ UnitMenu.c:94: 		if ( ( char1 != event->char1 || char2 != event->char2 ) && ( char2 != event->char1 || char1 != event->char2 ) ) { continue; } // The characters don't match this character event.
	ldrb	r3, [r4, #8]	@ _11, MEM[base: event_8, offset: 8B]
@ UnitMenu.c:94: 		if ( ( char1 != event->char1 || char2 != event->char2 ) && ( char2 != event->char1 || char1 != event->char2 ) ) { continue; } // The characters don't match this character event.
	cmp	r7, r3	@ _3, _11
	bne	.L93		@,
@ UnitMenu.c:94: 		if ( ( char1 != event->char1 || char2 != event->char2 ) && ( char2 != event->char1 || char1 != event->char2 ) ) { continue; } // The characters don't match this character event.
	ldrb	r2, [r4, #9]	@ MEM[base: event_8, offset: 9B], MEM[base: event_8, offset: 9B]
@ UnitMenu.c:94: 		if ( ( char1 != event->char1 || char2 != event->char2 ) && ( char2 != event->char1 || char1 != event->char2 ) ) { continue; } // The characters don't match this character event.
	cmp	r5, r2	@ target, MEM[base: event_8, offset: 9B]
	beq	.L94		@,
.L93:
@ UnitMenu.c:94: 		if ( ( char1 != event->char1 || char2 != event->char2 ) && ( char2 != event->char1 || char1 != event->char2 ) ) { continue; } // The characters don't match this character event.
	cmp	r5, r3	@ target, _11
	bne	.L95		@,
@ UnitMenu.c:94: 		if ( ( char1 != event->char1 || char2 != event->char2 ) && ( char2 != event->char1 || char1 != event->char2 ) ) { continue; } // The characters don't match this character event.
	ldrb	r3, [r4, #9]	@ MEM[base: event_8, offset: 9B], MEM[base: event_8, offset: 9B]
	cmp	r3, r7	@ MEM[base: event_8, offset: 9B], _3
	bne	.L95		@,
.L94:
@ UnitMenu.c:95: 		if ( checkAdjacent )
	ldr	r3, [sp, #4]	@ checkAdjacent, %sfp
	cmp	r3, #0	@ checkAdjacent,
	bne	.L96		@,
.L99:
@ UnitMenu.c:99: 		if ( CanUnitsSupport(active,target,event->level) )
	movs	r1, r5	@, target
	movs	r0, r6	@, active
	ldrh	r2, [r4, #2]	@ MEM[base: event_8, offset: 2B], MEM[base: event_8, offset: 2B]
	bl	CanUnitsSupport		@
@ UnitMenu.c:99: 		if ( CanUnitsSupport(active,target,event->level) )
	cmp	r0, #0	@ tmp159,
	beq	.L95		@,
	b	.L91		@
.L96:
@ UnitMenu.c:97: 			if ( GetCharacterDistance(active,ToUnit(target)) != 1 ) { continue; } // Are the characters actually adjacent?
	movs	r0, r5	@, target
	bl	ToUnit		@
@ MasterCalculations.c:279: 	return abs(unit1->xPos - unit2->xPos) + abs(unit1->yPos - unit2->yPos);
	movs	r3, #16	@ _35,
@ MasterCalculations.c:279: 	return abs(unit1->xPos - unit2->xPos) + abs(unit1->yPos - unit2->yPos);
	movs	r1, #16	@ _37,
@ MasterCalculations.c:279: 	return abs(unit1->xPos - unit2->xPos) + abs(unit1->yPos - unit2->yPos);
	ldrsb	r3, [r6, r3]	@ _35,* _35
@ MasterCalculations.c:279: 	return abs(unit1->xPos - unit2->xPos) + abs(unit1->yPos - unit2->yPos);
	ldrsb	r1, [r0, r1]	@ _37,* _37
@ MasterCalculations.c:279: 	return abs(unit1->xPos - unit2->xPos) + abs(unit1->yPos - unit2->yPos);
	subs	r2, r3, r1	@ _38, _35, _37
@ MasterCalculations.c:283: 	if ( i < 0 ) { return i*-1; }
	bpl	.L97		@,
@ MasterCalculations.c:283: 	if ( i < 0 ) { return i*-1; }
	subs	r2, r1, r3	@ _38, _37, _35
.L97:
@ MasterCalculations.c:279: 	return abs(unit1->xPos - unit2->xPos) + abs(unit1->yPos - unit2->yPos);
	movs	r1, #17	@ _41,
@ MasterCalculations.c:279: 	return abs(unit1->xPos - unit2->xPos) + abs(unit1->yPos - unit2->yPos);
	ldrb	r0, [r0, #17]	@ _43,
@ MasterCalculations.c:279: 	return abs(unit1->xPos - unit2->xPos) + abs(unit1->yPos - unit2->yPos);
	ldrsb	r1, [r6, r1]	@ _41,* _41
@ MasterCalculations.c:279: 	return abs(unit1->xPos - unit2->xPos) + abs(unit1->yPos - unit2->yPos);
	lsls	r0, r0, #24	@ _43, _43,
	asrs	r0, r0, #24	@ _43, _43,
@ MasterCalculations.c:279: 	return abs(unit1->xPos - unit2->xPos) + abs(unit1->yPos - unit2->yPos);
	subs	r3, r1, r0	@ _44, _41, _43
@ MasterCalculations.c:283: 	if ( i < 0 ) { return i*-1; }
	bpl	.L98		@,
@ MasterCalculations.c:283: 	if ( i < 0 ) { return i*-1; }
	subs	r3, r0, r1	@ _44, _43, _41
.L98:
@ MasterCalculations.c:279: 	return abs(unit1->xPos - unit2->xPos) + abs(unit1->yPos - unit2->yPos);
	adds	r3, r3, r2	@ tmp151, _44, _38
@ UnitMenu.c:97: 			if ( GetCharacterDistance(active,ToUnit(target)) != 1 ) { continue; } // Are the characters actually adjacent?
	cmp	r3, #1	@ tmp151,
	beq	.L99		@,
	b	.L95		@
.L106:
	.align	2
.L105:
	.word	CHARSupportConvoUsability
	.size	FindValidConvo.isra.0, .-FindValidConvo.isra.0
	.align	1
	.global	CHARSupportConvoUsability
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	CHARSupportConvoUsability, %function
CHARSupportConvoUsability:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
@ UnitMenu.c:24: 	if ( ProcFind(Proc_TI) == NULL ) { return 0; } // Has to do with the movement squares.	
	ldr	r3, .L114	@ tmp121,
@ UnitMenu.c:22: {
	push	{r4, r5, r6, lr}	@
@ UnitMenu.c:22: {
	movs	r4, r0	@ alloc, tmp127
@ UnitMenu.c:24: 	if ( ProcFind(Proc_TI) == NULL ) { return 0; } // Has to do with the movement squares.	
	ldr	r0, [r3]	@, Proc_TI
	ldr	r3, .L114+4	@ tmp122,
	bl	.L15		@
@ UnitMenu.c:24: 	if ( ProcFind(Proc_TI) == NULL ) { return 0; } // Has to do with the movement squares.	
	cmp	r0, #0	@ tmp128,
	bne	.L108		@,
.L110:
@ UnitMenu.c:24: 	if ( ProcFind(Proc_TI) == NULL ) { return 0; } // Has to do with the movement squares.	
	movs	r0, #0	@ <retval>,
.L107:
@ UnitMenu.c:35: }
	@ sp needed	@
	pop	{r4, r5, r6}
	pop	{r1}
	bx	r1
.L108:
@ UnitMenu.c:26: 	if ( FindValidConvo(alloc->event,ToUnit(alloc->currCharID),ToCharID(alloc->otherUnit),1,0) != NULL )
	ldrb	r0, [r4, #22]	@ tmp123,
	ldr	r6, [r4]	@ _10, alloc_6(D)->event
	bl	ToUnit		@
	movs	r5, r0	@ _13, tmp129
	ldr	r0, [r4, #24]	@, alloc_6(D)->otherUnit
	bl	ToCharID		@
	movs	r3, #1	@,
	movs	r2, r0	@ _15, tmp130
	movs	r1, r5	@, _13
	movs	r0, r6	@, _10
	bl	FindValidConvo.isra.0		@
@ UnitMenu.c:26: 	if ( FindValidConvo(alloc->event,ToUnit(alloc->currCharID),ToCharID(alloc->otherUnit),1,0) != NULL )
	cmp	r0, #0	@ tmp131,
	beq	.L110		@,
@ UnitMenu.c:28: 		alloc->returnThing = 1; // This is a weird thing that I seem to need to do.
	movs	r3, #1	@ tmp124,
@ UnitMenu.c:29: 		return 2; // Valid convo found!
	movs	r0, #2	@ <retval>,
@ UnitMenu.c:28: 		alloc->returnThing = 1; // This is a weird thing that I seem to need to do.
	strb	r3, [r4, #4]	@ tmp124, alloc_6(D)->returnThing
@ UnitMenu.c:29: 		return 2; // Valid convo found!
	b	.L107		@
.L115:
	.align	2
.L114:
	.word	Proc_TI
	.word	ProcFind
	.size	CHARSupportConvoUsability, .-CHARSupportConvoUsability
	.align	1
	.global	CallAddSupport
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	CallAddSupport, %function
CallAddSupport:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	push	{r4, r5, r6, lr}	@
@ EventCalls.c:4: 	if ( gMemorySlot[4] > 0 && gMemorySlot[4] <= MaxSupportLevel && FindSupport(ToUnit(gMemorySlot[1]),gMemorySlot[2]) == 0xFF ) // Ensure valid level before trying to add the support.
	ldr	r4, .L126	@ tmp136,
	ldr	r3, [r4, #16]	@ _1, gMemorySlot
@ EventCalls.c:3: {
	movs	r5, r0	@ parent, tmp149
@ EventCalls.c:4: 	if ( gMemorySlot[4] > 0 && gMemorySlot[4] <= MaxSupportLevel && FindSupport(ToUnit(gMemorySlot[1]),gMemorySlot[2]) == 0xFF ) // Ensure valid level before trying to add the support.
	cmp	r3, #0	@ _1,
	beq	.L116		@,
@ EventCalls.c:4: 	if ( gMemorySlot[4] > 0 && gMemorySlot[4] <= MaxSupportLevel && FindSupport(ToUnit(gMemorySlot[1]),gMemorySlot[2]) == 0xFF ) // Ensure valid level before trying to add the support.
	ldr	r2, .L126+4	@ tmp137,
	ldrb	r2, [r2]	@ MaxSupportLevel, MaxSupportLevel
@ EventCalls.c:4: 	if ( gMemorySlot[4] > 0 && gMemorySlot[4] <= MaxSupportLevel && FindSupport(ToUnit(gMemorySlot[1]),gMemorySlot[2]) == 0xFF ) // Ensure valid level before trying to add the support.
	cmp	r3, r2	@ _1, MaxSupportLevel
	bhi	.L116		@,
@ EventCalls.c:4: 	if ( gMemorySlot[4] > 0 && gMemorySlot[4] <= MaxSupportLevel && FindSupport(ToUnit(gMemorySlot[1]),gMemorySlot[2]) == 0xFF ) // Ensure valid level before trying to add the support.
	ldr	r0, [r4, #4]	@, gMemorySlot
	bl	ToUnit		@
	ldr	r1, [r4, #8]	@, gMemorySlot
	bl	FindSupport		@
@ EventCalls.c:4: 	if ( gMemorySlot[4] > 0 && gMemorySlot[4] <= MaxSupportLevel && FindSupport(ToUnit(gMemorySlot[1]),gMemorySlot[2]) == 0xFF ) // Ensure valid level before trying to add the support.
	cmp	r0, #255	@ tmp151,
	bne	.L116		@,
@ EventCalls.c:6: 		if ( AddSupport(ToUnit(gMemorySlot[1]),gMemorySlot[2]) )
	ldr	r0, [r4, #4]	@, gMemorySlot
	bl	ToUnit		@
	ldr	r1, [r4, #8]	@, gMemorySlot
	bl	AddSupport		@
@ EventCalls.c:6: 		if ( AddSupport(ToUnit(gMemorySlot[1]),gMemorySlot[2]) )
	cmp	r0, #0	@ tmp153,
	beq	.L116		@,
@ EventCalls.c:8: 			SetSupport(ToUnit(gMemorySlot[1]),gMemorySlot[2],gMemorySlot[3]); // This is guranteed to work because AddSupport was successful, so the support exists, and the level is valid.
	ldr	r0, [r4, #4]	@, gMemorySlot
	bl	ToUnit		@
	ldr	r2, [r4, #12]	@, gMemorySlot
	ldr	r1, [r4, #8]	@, gMemorySlot
	bl	SetSupport		@
@ EventCalls.c:10: 			if ( gMemorySlot[4] )
	ldr	r3, [r4, #16]	@ tmp155, gMemorySlot
	cmp	r3, #0	@ tmp155,
	beq	.L116		@,
@ EventCalls.c:13: 				SupportPopup(parent,gMemorySlot[3]);
	movs	r0, r5	@, parent
	ldr	r1, [r4, #12]	@, gMemorySlot
	bl	SupportPopup		@
.L116:
@ EventCalls.c:17: }
	@ sp needed	@
	pop	{r4, r5, r6}
	pop	{r0}
	bx	r0
.L127:
	.align	2
.L126:
	.word	gMemorySlot
	.word	MaxSupportLevel
	.size	CallAddSupport, .-CallAddSupport
	.align	1
	.global	CallSetSupport
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	CallSetSupport, %function
CallSetSupport:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	push	{r4, r5, r6, lr}	@
@ EventCalls.c:21: 	if ( SetSupport(ToUnit(gMemorySlot[1]),gMemorySlot[2],gMemorySlot[3]) )
	ldr	r4, .L136	@ tmp122,
@ EventCalls.c:20: {
	movs	r5, r0	@ parent, tmp128
@ EventCalls.c:21: 	if ( SetSupport(ToUnit(gMemorySlot[1]),gMemorySlot[2],gMemorySlot[3]) )
	ldr	r0, [r4, #4]	@, gMemorySlot
	bl	ToUnit		@
	ldr	r2, [r4, #12]	@, gMemorySlot
	ldr	r1, [r4, #8]	@, gMemorySlot
	bl	SetSupport		@
@ EventCalls.c:21: 	if ( SetSupport(ToUnit(gMemorySlot[1]),gMemorySlot[2],gMemorySlot[3]) )
	cmp	r0, #0	@ tmp130,
	beq	.L128		@,
@ EventCalls.c:24: 		if ( gMemorySlot[4] ) { SupportPopup(parent,gMemorySlot[3]); }
	ldr	r3, [r4, #16]	@ tmp131, gMemorySlot
	cmp	r3, #0	@ tmp131,
	beq	.L128		@,
@ EventCalls.c:24: 		if ( gMemorySlot[4] ) { SupportPopup(parent,gMemorySlot[3]); }
	movs	r0, r5	@, parent
	ldr	r1, [r4, #12]	@, gMemorySlot
	bl	SupportPopup		@
.L128:
@ EventCalls.c:26: }
	@ sp needed	@
	pop	{r4, r5, r6}
	pop	{r0}
	bx	r0
.L137:
	.align	2
.L136:
	.word	gMemorySlot
	.size	CallSetSupport, .-CallSetSupport
	.align	1
	.global	CallIncreaseSupport
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	CallIncreaseSupport, %function
CallIncreaseSupport:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 16
	@ frame_needed = 0, uses_anonymous_args = 0
	push	{r4, r5, r6, r7, lr}	@
@ EventCalls.c:30: 	if ( IncreaseSupport(ToUnit(gMemorySlot[1]),gMemorySlot[2]) )
	ldr	r5, .L153	@ tmp132,
@ EventCalls.c:29: {
	sub	sp, sp, #20	@,,
@ EventCalls.c:29: {
	str	r0, [sp, #12]	@ tmp141, %sfp
@ EventCalls.c:30: 	if ( IncreaseSupport(ToUnit(gMemorySlot[1]),gMemorySlot[2]) )
	ldr	r0, [r5, #4]	@, gMemorySlot
	bl	ToUnit		@
	ldr	r6, [r5, #8]	@ _5, gMemorySlot
	movs	r4, r0	@ _3, tmp142
@ MemoryManagement.c:70: 	Unit* supportingUnit = ToUnit(supporting);
	movs	r0, r6	@, _5
	bl	ToUnit		@
	str	r0, [sp, #4]	@ tmp143, %sfp
@ MemoryManagement.c:71: 	int thisChar = ToCharID(unit);
	movs	r0, r4	@, _3
	bl	ToCharID		@
@ MemoryManagement.c:72: 	if ( FindSupport(unit,supporting) != 0xFF )
	movs	r1, r6	@, _5
@ MemoryManagement.c:71: 	int thisChar = ToCharID(unit);
	str	r0, [sp, #8]	@ tmp144, %sfp
@ MemoryManagement.c:72: 	if ( FindSupport(unit,supporting) != 0xFF )
	movs	r0, r4	@, _3
	bl	FindSupport		@
@ MemoryManagement.c:72: 	if ( FindSupport(unit,supporting) != 0xFF )
	cmp	r0, #255	@ tmp145,
	beq	.L139		@,
@ MemoryManagement.c:75: 		int level = GetSupportLevel(supportingUnit,thisChar)+1;
	ldr	r1, [sp, #8]	@, %sfp
	ldr	r0, [sp, #4]	@, %sfp
	bl	GetSupportLevel		@
@ MemoryManagement.c:76: 		if ( level < 0 || level > MaxSupportLevel ) { return 0; } // Check the second first to ensure no valid changes are made to the first.
	adds	r7, r0, #1	@ level, tmp146,
	bmi	.L138		@,
@ MemoryManagement.c:76: 		if ( level < 0 || level > MaxSupportLevel ) { return 0; } // Check the second first to ensure no valid changes are made to the first.
	ldr	r3, .L153+4	@ tmp134,
	ldrb	r3, [r3]	@ MaxSupportLevel, MaxSupportLevel
@ MemoryManagement.c:76: 		if ( level < 0 || level > MaxSupportLevel ) { return 0; } // Check the second first to ensure no valid changes are made to the first.
	cmp	r7, r3	@ level, MaxSupportLevel
	bgt	.L138		@,
@ MemoryManagement.c:77: 		if ( !SetSupport(unit,supporting,level) ) { return 0; }; // Immediately exit false if the first failed.
	movs	r2, r7	@, level
	movs	r1, r6	@, _5
	movs	r0, r4	@, _3
	bl	SetSupport		@
@ MemoryManagement.c:77: 		if ( !SetSupport(unit,supporting,level) ) { return 0; }; // Immediately exit false if the first failed.
	cmp	r0, #0	@ tmp147,
	beq	.L138		@,
@ MemoryManagement.c:78: 		SetSupport(supportingUnit,thisChar,level);
	movs	r2, r7	@, level
	ldr	r1, [sp, #8]	@, %sfp
	ldr	r0, [sp, #4]	@, %sfp
	bl	SetSupport		@
.L143:
@ EventCalls.c:33: 		if ( gMemorySlot[3] ) { SupportPopup(parent,GetSupportLevel(ToUnit(gMemorySlot[1]),gMemorySlot[2])); }
	ldr	r3, [r5, #12]	@ tmp152, gMemorySlot
	cmp	r3, #0	@ tmp152,
	beq	.L138		@,
@ EventCalls.c:33: 		if ( gMemorySlot[3] ) { SupportPopup(parent,GetSupportLevel(ToUnit(gMemorySlot[1]),gMemorySlot[2])); }
	ldr	r0, [r5, #4]	@, gMemorySlot
	bl	ToUnit		@
	ldr	r1, [r5, #8]	@, gMemorySlot
	bl	GetSupportLevel		@
	movs	r1, r0	@ _13, tmp150
	ldr	r0, [sp, #12]	@, %sfp
	bl	SupportPopup		@
@ EventCalls.c:35: }
	b	.L138		@
.L139:
@ MemoryManagement.c:84: 		return AddSupport(unit,supporting); // This already checks for if each has max supports.
	movs	r1, r6	@, _5
	movs	r0, r4	@, _3
	bl	AddSupport		@
@ EventCalls.c:30: 	if ( IncreaseSupport(ToUnit(gMemorySlot[1]),gMemorySlot[2]) )
	cmp	r0, #0	@ tmp148,
	bne	.L143		@,
.L138:
@ EventCalls.c:35: }
	add	sp, sp, #20	@,,
	@ sp needed	@
	pop	{r4, r5, r6, r7}
	pop	{r0}
	bx	r0
.L154:
	.align	2
.L153:
	.word	gMemorySlot
	.word	MaxSupportLevel
	.size	CallIncreaseSupport, .-CallIncreaseSupport
	.align	1
	.global	CallClearSupport
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	CallClearSupport, %function
CallClearSupport:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	push	{r3, r4, r5, r6, r7, lr}	@
@ EventCalls.c:39: 	ClearSupport(ToUnit(gMemorySlot[1]),gMemorySlot[2]);
	ldr	r5, .L163	@ tmp136,
@ EventCalls.c:39: 	ClearSupport(ToUnit(gMemorySlot[1]),gMemorySlot[2]);
	ldr	r0, [r5, #4]	@, gMemorySlot
	bl	ToUnit		@
	ldr	r5, [r5, #8]	@ _5, gMemorySlot
	movs	r4, r0	@ _3, tmp174
@ MemoryManagement.c:90: 	Unit* supportingUnit = ToUnit(supporting);
	movs	r0, r5	@, _5
	bl	ToUnit		@
	movs	r6, r0	@ supportingUnit, tmp175
@ MemoryManagement.c:91: 	int thisChar = ToCharID(unit);
	movs	r0, r4	@, _3
	bl	ToCharID		@
@ MemoryManagement.c:92: 	int loc1 = FindSupport(unit,supporting);
	movs	r1, r5	@, _5
@ MemoryManagement.c:91: 	int thisChar = ToCharID(unit);
	movs	r7, r0	@ thisChar, tmp176
@ MemoryManagement.c:92: 	int loc1 = FindSupport(unit,supporting);
	movs	r0, r4	@, _3
	bl	FindSupport		@
	movs	r5, r0	@ loc1, tmp177
@ MemoryManagement.c:94: 	if ( loc1 == 0xFF || loc2 == 0xFF ) { return 0; } // It should be sufficient to check only one character for support not found but eh may as well be thourough.
	cmp	r0, #255	@ loc1,
	beq	.L155		@,
@ MemoryManagement.c:93: 	int loc2 = FindSupport(supportingUnit,thisChar);
	movs	r1, r7	@, thisChar
	movs	r0, r6	@, supportingUnit
	bl	FindSupport		@
@ MemoryManagement.c:94: 	if ( loc1 == 0xFF || loc2 == 0xFF ) { return 0; } // It should be sufficient to check only one character for support not found but eh may as well be thourough.
	cmp	r0, #255	@ loc2,
	beq	.L155		@,
@ MemoryManagement.c:95: 	unit->supports[loc1] = 0; // Clear the characters.
	movs	r2, #0	@ tmp142,
	adds	r3, r4, r5	@ tmp138, _3, loc1
	adds	r3, r3, #52	@ tmp141,
	strb	r2, [r3]	@ tmp142, _3->supports
@ MemoryManagement.c:96: 	supportingUnit->supports[loc2] = 0;
	adds	r3, r6, r0	@ tmp144, supportingUnit, loc2
	adds	r3, r3, #52	@ tmp147,
	strb	r2, [r3]	@ tmp142, supportingUnit_9->supports
@ MemoryManagement.c:97: 	unit->supportLevels &= ~(7<<(loc1*3)); // Clear the levels. This should be equivalent to bic.
	movs	r3, #7	@ tmp153,
	movs	r1, r3	@ tmp152, tmp153
@ MemoryManagement.c:97: 	unit->supportLevels &= ~(7<<(loc1*3)); // Clear the levels. This should be equivalent to bic.
	adds	r2, r2, #3	@ tmp150,
	muls	r5, r2	@ tmp151, tmp150
@ MemoryManagement.c:97: 	unit->supportLevels &= ~(7<<(loc1*3)); // Clear the levels. This should be equivalent to bic.
	lsls	r1, r1, r5	@ tmp152, tmp152, tmp151
@ MemoryManagement.c:98: 	supportingUnit->supportLevels &= ~(7<<(loc2*3));
	muls	r0, r2	@ tmp163, tmp150
@ MemoryManagement.c:97: 	unit->supportLevels &= ~(7<<(loc1*3)); // Clear the levels. This should be equivalent to bic.
	movs	r5, r1	@ tmp152, tmp152
@ MemoryManagement.c:98: 	supportingUnit->supportLevels &= ~(7<<(loc2*3));
	lsls	r3, r3, r0	@ tmp164, tmp153, tmp163
@ MemoryManagement.c:97: 	unit->supportLevels &= ~(7<<(loc1*3)); // Clear the levels. This should be equivalent to bic.
	ldrh	r1, [r4, #50]	@ tmp158,
	bics	r1, r5	@ tmp159, tmp152
	strh	r1, [r4, #50]	@ tmp159, _3->supportLevels
@ MemoryManagement.c:98: 	supportingUnit->supportLevels &= ~(7<<(loc2*3));
	ldrh	r2, [r6, #50]	@ tmp170,
	bics	r2, r3	@ tmp171, tmp164
	strh	r2, [r6, #50]	@ tmp171, supportingUnit_9->supportLevels
.L155:
@ EventCalls.c:40: }
	@ sp needed	@
	pop	{r3, r4, r5, r6, r7}
	pop	{r0}
	bx	r0
.L164:
	.align	2
.L163:
	.word	gMemorySlot
	.size	CallClearSupport, .-CallClearSupport
	.align	1
	.global	CallGetSupportLevel
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	CallGetSupportLevel, %function
CallGetSupportLevel:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	push	{r4, lr}	@
@ EventCalls.c:44: 	gMemorySlot[1] = GetSupportLevel(ToUnit(gMemorySlot[1]),gMemorySlot[2]);
	ldr	r4, .L166	@ tmp118,
@ EventCalls.c:44: 	gMemorySlot[1] = GetSupportLevel(ToUnit(gMemorySlot[1]),gMemorySlot[2]);
	ldr	r0, [r4, #4]	@, gMemorySlot
	bl	ToUnit		@
	ldr	r1, [r4, #8]	@, gMemorySlot
	bl	GetSupportLevel		@
@ EventCalls.c:45: }
	@ sp needed	@
@ EventCalls.c:44: 	gMemorySlot[1] = GetSupportLevel(ToUnit(gMemorySlot[1]),gMemorySlot[2]);
	str	r0, [r4, #4]	@ tmp122, gMemorySlot
@ EventCalls.c:45: }
	pop	{r4}
	pop	{r0}
	bx	r0
.L167:
	.align	2
.L166:
	.word	gMemorySlot
	.size	CallGetSupportLevel, .-CallGetSupportLevel
	.align	1
	.global	SupportConvoUsability
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	SupportConvoUsability, %function
SupportConvoUsability:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 8
	@ frame_needed = 0, uses_anonymous_args = 0
	push	{r0, r1, r2, r4, r5, r6, r7, lr}	@
@ UnitMenu.c:7: 	int x = ActiveUnit->xPos;
	movs	r2, #16	@ x,
@ UnitMenu.c:7: 	int x = ActiveUnit->xPos;
	ldr	r7, .L176	@ tmp139,
	ldr	r3, [r7]	@ ActiveUnit.6_1, ActiveUnit
@ UnitMenu.c:7: 	int x = ActiveUnit->xPos;
	ldrsb	r2, [r3, r2]	@ x,* x
	str	r2, [sp]	@ x, %sfp
@ UnitMenu.c:8: 	int y = ActiveUnit->yPos;
	movs	r2, #17	@ y,
	ldrsb	r2, [r3, r2]	@ y,* y
	str	r2, [sp, #4]	@ y, %sfp
@ UnitMenu.c:9: 	if ( ActiveUnit->state & US_CANTOING ) { return 3; } // Immediately return false if this unit is cantoing.
	ldr	r2, [r3, #12]	@ ActiveUnit.6_1->state, ActiveUnit.6_1->state
	movs	r3, #64	@ tmp142,
	movs	r4, r2	@ tmp140, ActiveUnit.6_1->state
	ands	r4, r3	@ tmp140, tmp142
@ UnitMenu.c:9: 	if ( ActiveUnit->state & US_CANTOING ) { return 3; } // Immediately return false if this unit is cantoing.
	tst	r2, r3	@ ActiveUnit.6_1->state, tmp142
	bne	.L169		@,
.L171:
@ UnitMenu.c:13: 		int allegianceByte = gMapUnit[y+yAdj[i]][x+xAdj[i]];
	ldr	r2, .L176+4	@ tmp143,
@ UnitMenu.c:13: 		int allegianceByte = gMapUnit[y+yAdj[i]][x+xAdj[i]];
	ldr	r1, [sp, #4]	@ y, %sfp
@ UnitMenu.c:13: 		int allegianceByte = gMapUnit[y+yAdj[i]][x+xAdj[i]];
	ldrsb	r3, [r4, r2]	@ MEM[symbol: yAdj, index: _57, offset: 0B], MEM[symbol: yAdj, index: _57, offset: 0B]
@ UnitMenu.c:13: 		int allegianceByte = gMapUnit[y+yAdj[i]][x+xAdj[i]];
	adds	r3, r3, r1	@ tmp145, MEM[symbol: yAdj, index: _57, offset: 0B], y
	ldr	r1, .L176+8	@ tmp147,
	ldr	r1, [r1]	@ gMapUnit, gMapUnit
	lsls	r3, r3, #2	@ tmp148, tmp145,
@ UnitMenu.c:13: 		int allegianceByte = gMapUnit[y+yAdj[i]][x+xAdj[i]];
	ldr	r3, [r3, r1]	@ *_12, *_12
@ UnitMenu.c:13: 		int allegianceByte = gMapUnit[y+yAdj[i]][x+xAdj[i]];
	adds	r2, r2, #4	@ tmp150,
@ UnitMenu.c:13: 		int allegianceByte = gMapUnit[y+yAdj[i]][x+xAdj[i]];
	ldr	r1, [sp]	@ x, %sfp
@ UnitMenu.c:13: 		int allegianceByte = gMapUnit[y+yAdj[i]][x+xAdj[i]];
	ldrsb	r2, [r4, r2]	@ MEM[symbol: xAdj, index: _57, offset: 0B], MEM[symbol: xAdj, index: _57, offset: 0B]
@ UnitMenu.c:13: 		int allegianceByte = gMapUnit[y+yAdj[i]][x+xAdj[i]];
	adds	r3, r3, r1	@ tmp153, *_12, x
	ldrb	r6, [r3, r2]	@ _19, *_18
@ UnitMenu.c:14: 		if ( allegianceByte == 0 ) { continue; } // If there isn't a character here, reiterate.
	cmp	r6, #0	@ _19,
	bne	.L170		@,
.L173:
@ UnitMenu.c:11: 	for ( int i = 0 ; i < 4 ; i++ )
	adds	r4, r4, #1	@ i,
@ UnitMenu.c:11: 	for ( int i = 0 ; i < 4 ; i++ )
	cmp	r4, #4	@ i,
	bne	.L171		@,
.L169:
@ UnitMenu.c:9: 	if ( ActiveUnit->state & US_CANTOING ) { return 3; } // Immediately return false if this unit is cantoing.
	movs	r0, #3	@ <retval>,
.L168:
@ UnitMenu.c:18: }
	@ sp needed	@
	pop	{r1, r2, r3, r4, r5, r6, r7}
	pop	{r1}
	bx	r1
.L170:
@ UnitMenu.c:15: 		if ( FindValidConvo(GetCharacterEvents(),GetUnit(allegianceByte),ToCharID(ActiveUnit),0,1) ) { return 1; }
	bl	GetCharacterEvents		@
@ UnitMenu.c:15: 		if ( FindValidConvo(GetCharacterEvents(),GetUnit(allegianceByte),ToCharID(ActiveUnit),0,1) ) { return 1; }
	ldr	r3, .L176+12	@ tmp154,
@ UnitMenu.c:15: 		if ( FindValidConvo(GetCharacterEvents(),GetUnit(allegianceByte),ToCharID(ActiveUnit),0,1) ) { return 1; }
	movs	r5, r0	@ _20, tmp158
@ UnitMenu.c:15: 		if ( FindValidConvo(GetCharacterEvents(),GetUnit(allegianceByte),ToCharID(ActiveUnit),0,1) ) { return 1; }
	movs	r0, r6	@, _19
	bl	.L15		@
	movs	r6, r0	@ _21, tmp159
@ UnitMenu.c:15: 		if ( FindValidConvo(GetCharacterEvents(),GetUnit(allegianceByte),ToCharID(ActiveUnit),0,1) ) { return 1; }
	ldr	r0, [r7]	@, ActiveUnit
	bl	ToCharID		@
	movs	r3, #0	@,
	movs	r2, r0	@ _23, tmp160
	movs	r1, r6	@, _21
	movs	r0, r5	@, _20
	bl	FindValidConvo.isra.0		@
@ UnitMenu.c:15: 		if ( FindValidConvo(GetCharacterEvents(),GetUnit(allegianceByte),ToCharID(ActiveUnit),0,1) ) { return 1; }
	cmp	r0, #0	@ tmp161,
	beq	.L173		@,
@ UnitMenu.c:15: 		if ( FindValidConvo(GetCharacterEvents(),GetUnit(allegianceByte),ToCharID(ActiveUnit),0,1) ) { return 1; }
	movs	r0, #1	@ <retval>,
	b	.L168		@
.L177:
	.align	2
.L176:
	.word	ActiveUnit
	.word	.LANCHOR0
	.word	gMapUnit
	.word	GetUnit
	.size	SupportConvoUsability, .-SupportConvoUsability
	.align	1
	.global	BuildSupportTargetList
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	BuildSupportTargetList, %function
BuildSupportTargetList:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 24
	@ frame_needed = 0, uses_anonymous_args = 0
@ UnitMenu.c:40: 	int x = active->xPos;
	movs	r3, #16	@ x,
@ UnitMenu.c:38: {
	push	{r4, r5, r6, r7, lr}	@
@ UnitMenu.c:41: 	int y = active->yPos;
	movs	r7, #17	@ y,
@ UnitMenu.c:40: 	int x = active->xPos;
	ldrsb	r3, [r0, r3]	@ x,* x
@ UnitMenu.c:38: {
	sub	sp, sp, #28	@,,
@ UnitMenu.c:40: 	int x = active->xPos;
	str	r3, [sp, #12]	@ x, %sfp
@ UnitMenu.c:41: 	int y = active->yPos;
	ldrsb	r7, [r0, r7]	@ y,* y
@ UnitMenu.c:38: {
	movs	r6, r0	@ active, tmp159
@ UnitMenu.c:42: 	InitTargets(x,y);
	movs	r1, r7	@, y
	movs	r0, r3	@, x
	ldr	r3, .L187	@ tmp139,
	bl	.L15		@
@ UnitMenu.c:43: 	for ( int i = 0 ; i < 4 ; i++ )
	movs	r4, #0	@ i,
.L182:
@ UnitMenu.c:45: 		int allegianceByte = gMapUnit[y+yAdj[i]][x+xAdj[i]];
	ldr	r3, .L187+4	@ tmp140,
	ldrsb	r2, [r4, r3]	@ MEM[symbol: yAdj, index: _58, offset: 0B], MEM[symbol: yAdj, index: _58, offset: 0B]
@ UnitMenu.c:45: 		int allegianceByte = gMapUnit[y+yAdj[i]][x+xAdj[i]];
	adds	r3, r3, #4	@ tmp143,
@ UnitMenu.c:45: 		int allegianceByte = gMapUnit[y+yAdj[i]][x+xAdj[i]];
	adds	r2, r2, r7	@ _6, MEM[symbol: yAdj, index: _58, offset: 0B], y
	str	r2, [sp, #4]	@ _6, %sfp
@ UnitMenu.c:45: 		int allegianceByte = gMapUnit[y+yAdj[i]][x+xAdj[i]];
	ldrsb	r3, [r4, r3]	@ MEM[symbol: xAdj, index: _58, offset: 0B], MEM[symbol: xAdj, index: _58, offset: 0B]
@ UnitMenu.c:45: 		int allegianceByte = gMapUnit[y+yAdj[i]][x+xAdj[i]];
	ldr	r2, [sp, #12]	@ x, %sfp
	adds	r3, r3, r2	@ _13, MEM[symbol: xAdj, index: _58, offset: 0B], x
	str	r3, [sp, #8]	@ _13, %sfp
@ UnitMenu.c:45: 		int allegianceByte = gMapUnit[y+yAdj[i]][x+xAdj[i]];
	ldr	r3, .L187+8	@ tmp146,
	ldr	r2, [sp, #4]	@ _6, %sfp
	ldr	r3, [r3]	@ gMapUnit, gMapUnit
	lsls	r2, r2, #2	@ tmp147, _6,
@ UnitMenu.c:45: 		int allegianceByte = gMapUnit[y+yAdj[i]][x+xAdj[i]];
	ldr	r3, [r2, r3]	@ *_9, *_9
	ldr	r2, [sp, #8]	@ _13, %sfp
	ldrb	r5, [r3, r2]	@ _16, *_15
@ UnitMenu.c:46: 		if ( allegianceByte == 0 ) { continue; } // If there isn't a character here, reiterate.
	cmp	r5, #0	@ _16,
	beq	.L180		@,
@ UnitMenu.c:48: 		CharacterEvent* event = FindValidConvo(GetCharacterEvents(),GetUnit(allegianceByte),ToCharID(active),0,1);
	bl	GetCharacterEvents		@
@ UnitMenu.c:48: 		CharacterEvent* event = FindValidConvo(GetCharacterEvents(),GetUnit(allegianceByte),ToCharID(active),0,1);
	ldr	r3, .L187+12	@ tmp171,
@ UnitMenu.c:48: 		CharacterEvent* event = FindValidConvo(GetCharacterEvents(),GetUnit(allegianceByte),ToCharID(active),0,1);
	str	r0, [sp, #16]	@ tmp160, %sfp
@ UnitMenu.c:48: 		CharacterEvent* event = FindValidConvo(GetCharacterEvents(),GetUnit(allegianceByte),ToCharID(active),0,1);
	movs	r0, r5	@, _16
	bl	.L15		@
	str	r0, [sp, #20]	@ tmp161, %sfp
@ UnitMenu.c:48: 		CharacterEvent* event = FindValidConvo(GetCharacterEvents(),GetUnit(allegianceByte),ToCharID(active),0,1);
	movs	r0, r6	@, active
	bl	ToCharID		@
	movs	r3, #0	@,
	movs	r2, r0	@ _19, tmp162
	ldr	r1, [sp, #20]	@, %sfp
	ldr	r0, [sp, #16]	@, %sfp
	bl	FindValidConvo.isra.0		@
@ UnitMenu.c:49: 		if ( event != NULL )
	cmp	r0, #0	@ tmp163,
	beq	.L180		@,
@ UnitMenu.c:52: 			AddTarget(x+xAdj[i],y+yAdj[i],GetUnit(allegianceByte)->index & 0x3F,0); // & 0x3F for clearing the allegiance. Why isn't that a bitfield in FE-CLib?
	movs	r0, r5	@, _16
	ldr	r3, .L187+12	@ tmp173,
	bl	.L15		@
@ UnitMenu.c:52: 			AddTarget(x+xAdj[i],y+yAdj[i],GetUnit(allegianceByte)->index & 0x3F,0); // & 0x3F for clearing the allegiance. Why isn't that a bitfield in FE-CLib?
	movs	r3, #63	@ tmp175,
	ldrb	r2, [r0, #11]	@ tmp152,
	ldr	r1, [sp, #4]	@, %sfp
	ands	r2, r3	@ tmp155, tmp175
	ldr	r0, [sp, #8]	@, %sfp
	movs	r3, #0	@,
	ldr	r5, .L187+16	@ tmp157,
	bl	.L189		@
.L180:
@ UnitMenu.c:43: 	for ( int i = 0 ; i < 4 ; i++ )
	adds	r4, r4, #1	@ i,
@ UnitMenu.c:43: 	for ( int i = 0 ; i < 4 ; i++ )
	cmp	r4, #4	@ i,
	bne	.L182		@,
@ UnitMenu.c:56: }
	add	sp, sp, #28	@,,
	@ sp needed	@
	pop	{r4, r5, r6, r7}
	pop	{r0}
	bx	r0
.L188:
	.align	2
.L187:
	.word	InitTargets
	.word	.LANCHOR0
	.word	gMapUnit
	.word	GetUnit
	.word	AddTarget
	.size	BuildSupportTargetList, .-BuildSupportTargetList
	.align	1
	.global	SupportSelected
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	SupportSelected, %function
SupportSelected:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	push	{r4, r5, r6, lr}	@
@ UnitMenu.c:62: 	CharacterEvent* event = FindValidConvo(GetCharacterEvents(),ActiveUnit,ToCharID(GetUnit(gActionData.targetIndex)),0,1);
	bl	GetCharacterEvents		@
	ldr	r3, .L194	@ tmp127,
@ UnitMenu.c:62: 	CharacterEvent* event = FindValidConvo(GetCharacterEvents(),ActiveUnit,ToCharID(GetUnit(gActionData.targetIndex)),0,1);
	ldr	r4, .L194+4	@ tmp128,
@ UnitMenu.c:62: 	CharacterEvent* event = FindValidConvo(GetCharacterEvents(),ActiveUnit,ToCharID(GetUnit(gActionData.targetIndex)),0,1);
	movs	r5, r0	@ _1, tmp148
	ldr	r6, [r3]	@ ActiveUnit.16_2, ActiveUnit
@ UnitMenu.c:62: 	CharacterEvent* event = FindValidConvo(GetCharacterEvents(),ActiveUnit,ToCharID(GetUnit(gActionData.targetIndex)),0,1);
	ldrb	r0, [r4, #13]	@ tmp129,
	ldr	r3, .L194+8	@ tmp130,
	bl	.L15		@
@ UnitMenu.c:62: 	CharacterEvent* event = FindValidConvo(GetCharacterEvents(),ActiveUnit,ToCharID(GetUnit(gActionData.targetIndex)),0,1);
	bl	ToCharID		@
	movs	r3, #0	@,
	movs	r2, r0	@ _5, tmp150
	movs	r1, r6	@, ActiveUnit.16_2
	movs	r0, r5	@, _1
	bl	FindValidConvo.isra.0		@
	movs	r3, r0	@ event, tmp151
@ UnitMenu.c:63: 	if ( (u32)event->eventOrText.event & 0xFFFF0000 )
	ldr	r0, [r0, #4]	@ _6, event_21->eventOrText.event
@ UnitMenu.c:63: 	if ( (u32)event->eventOrText.event & 0xFFFF0000 )
	lsrs	r2, r0, #16	@ tmp132, _6,
	ldr	r5, .L194+12	@ tmp147,
	lsls	r1, r2, #16	@ tmp131, tmp132,
@ UnitMenu.c:63: 	if ( (u32)event->eventOrText.event & 0xFFFF0000 )
	cmp	r2, #0	@ tmp132,
	beq	.L191		@,
@ UnitMenu.c:66: 		StartMapEventEngine(event->eventOrText.event,0);
	movs	r1, #0	@,
.L193:
@ UnitMenu.c:74: 		StartMapEventEngine(&SupportConvoEvents,0);
	bl	.L189		@
@ UnitMenu.c:76: 	gActionData.unitActionType = 0x0F;
	movs	r3, #15	@ tmp143,
@ UnitMenu.c:78: }
	movs	r0, #0	@,
	@ sp needed	@
@ UnitMenu.c:76: 	gActionData.unitActionType = 0x0F;
	strb	r3, [r4, #17]	@ tmp143, gActionData.unitActionType
@ UnitMenu.c:78: }
	pop	{r4, r5, r6}
	pop	{r1}
	bx	r1
.L191:
@ UnitMenu.c:71: 		gMemorySlot[2] = event->eventOrText.text;
	ldrh	r0, [r3, #4]	@ tmp135,
@ UnitMenu.c:71: 		gMemorySlot[2] = event->eventOrText.text;
	ldr	r2, .L194+16	@ tmp134,
@ UnitMenu.c:71: 		gMemorySlot[2] = event->eventOrText.text;
	str	r0, [r2, #8]	@ tmp135, gMemorySlot
@ UnitMenu.c:72: 		gMemorySlot[1] = event->char1;
	ldrb	r0, [r3, #8]	@ tmp137,
	str	r0, [r2, #4]	@ tmp137, gMemorySlot
@ UnitMenu.c:73: 		gMemorySlot[3] = event->char2;
	ldrb	r3, [r3, #9]	@ tmp139,
@ UnitMenu.c:74: 		StartMapEventEngine(&SupportConvoEvents,0);
	ldr	r0, .L194+20	@,
@ UnitMenu.c:73: 		gMemorySlot[3] = event->char2;
	str	r3, [r2, #12]	@ tmp139, gMemorySlot
	b	.L193		@
.L195:
	.align	2
.L194:
	.word	ActiveUnit
	.word	gActionData
	.word	GetUnit
	.word	StartMapEventEngine
	.word	gMemorySlot
	.word	SupportConvoEvents
	.size	SupportSelected, .-SupportSelected
	.align	1
	.global	SupportReworkPageSwitch
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	SupportReworkPageSwitch, %function
SupportReworkPageSwitch:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	@ link register save eliminated.
@ StatScreen.c:83: 	asm("@ Autohook to 0x08088690. r0 should equal the number of stat screen pages to have upon hitting the strb r0, [ r5, #0x01 ].\n\
	.syntax divided
@ 83 "StatScreen.c" 1
	@ Autohook to 0x08088690. r0 should equal the number of stat screen pages to have upon hitting the strb r0, [ r5, #0x01 ].
		@ r5 = StatScreenStruct. Preserve no scratch registers!
		ldr r0, [ r5, #0x0C ] @ r0 = character struct.
		bl CountSupports @ r0 = number of supports.
		mov r1, #0x04 @ 4 pages if there are supports to show.
		cmp r0, #0x00
		bne NoSupportsStatScreen
			mov r1, #0x03 @ 3 pages if there no are supports to show.
			@ We also need to ensure that the stat screen does not try to load page 4 (because the user left from page 4 on the last stat screen).
			ldrb r0, [ r5 ] @ Current stat screen page.
			cmp r0, #0x03
			bne NoSupportsStatScreen
				mov r0, #0x00
				strb r0, [ r5 ] @ Move to page 1 instead of 4.
		NoSupportsStatScreen:
		mov r0, r1
		strb r0, [ r5, #0x01 ]
		blh Text_InitFont, r1
		blh _ResetIconGraphics, r1
		blh #0x08086DF0, r1
		ldr r0, =#0x080886A1
		bx r0
		.ltorg
@ 0 "" 2
@ StatScreen.c:106: }
	.thumb
	.syntax unified
	@ sp needed	@
	bx	lr
	.size	SupportReworkPageSwitch, .-SupportReworkPageSwitch
	.align	1
	.global	PassSupportDataToRTextHandler
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	PassSupportDataToRTextHandler, %function
PassSupportDataToRTextHandler:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	@ link register save eliminated.
@ StatScreen.c:112: 	asm("@ jumpToHack at 0x08088F50.\n\
	.syntax divided
@ 112 "StatScreen.c" 1
	@ jumpToHack at 0x08088F50.
		ldrh r0, [ r7 ]	@ +4E
		ldrh r1, [ r6 ]	@ +4C
		mov r2, r4
		bl CreateNewHelpBubbleProc
		ldr r0, =0x0203E784
		str r5, [ r0 ]
		
		ReturnToFunc:
		ldr r1, =0x08088F5D
		bx r1
		.ltorg
@ 0 "" 2
@ StatScreen.c:124: }
	.thumb
	.syntax unified
	@ sp needed	@
	bx	lr
	.size	PassSupportDataToRTextHandler, .-PassSupportDataToRTextHandler
	.align	1
	.global	CreateNewHelpBubbleProc
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	CreateNewHelpBubbleProc, %function
CreateNewHelpBubbleProc:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	push	{r4, r5, r6, lr}	@
@ StatScreen.c:127: {
	movs	r4, r2	@ proc, tmp142
	movs	r6, r0	@ idk1, tmp140
	movs	r5, r1	@ idk2, tmp141
@ StatScreen.c:128: 	RTextProc* newProc = (RTextProc*)ProcStart(&HelpTextProcCode,(Proc*)3); // idk what's up with the second parameter.
	ldr	r3, .L199	@ tmp118,
	movs	r1, #3	@,
	ldr	r0, .L199+4	@,
	bl	.L15		@
@ StatScreen.c:131: 	newProc->char1 = proc->char1;
	movs	r3, r4	@ tmp121, proc
@ StatScreen.c:129: 	newProc->idk10 = idk1;
	str	r6, [r0, #88]	@ idk1, newProc_6->idk10
@ StatScreen.c:130: 	newProc->idk11 = idk2;
	str	r5, [r0, #92]	@ idk2, newProc_6->idk11
@ StatScreen.c:131: 	newProc->char1 = proc->char1;
	adds	r3, r3, #41	@ tmp121,
	ldrb	r2, [r3]	@ _1,
@ StatScreen.c:131: 	newProc->char1 = proc->char1;
	movs	r3, r0	@ tmp124, newProc
	adds	r3, r3, #41	@ tmp124,
	strb	r2, [r3]	@ _1, newProc_6->char1
@ StatScreen.c:132: 	newProc->char2 = proc->char2;
	movs	r3, r4	@ tmp128, proc
	adds	r3, r3, #42	@ tmp128,
	ldrb	r2, [r3]	@ _2,
@ StatScreen.c:132: 	newProc->char2 = proc->char2;
	movs	r3, r0	@ tmp131, newProc
	adds	r3, r3, #42	@ tmp131,
	strb	r2, [r3]	@ _2, newProc_6->char2
@ StatScreen.c:133: 	newProc->level = proc->level;
	adds	r4, r4, #43	@ tmp135,
	ldrb	r3, [r4]	@ _3,
@ StatScreen.c:133: 	newProc->level = proc->level;
	adds	r0, r0, #43	@ tmp138,
@ StatScreen.c:134: }
	@ sp needed	@
@ StatScreen.c:133: 	newProc->level = proc->level;
	strb	r3, [r0]	@ _3, newProc_6->level
@ StatScreen.c:134: }
	pop	{r4, r5, r6}
	pop	{r0}
	bx	r0
.L200:
	.align	2
.L199:
	.word	ProcStart
	.word	HelpTextProcCode
	.size	CreateNewHelpBubbleProc, .-CreateNewHelpBubbleProc
	.align	1
	.global	DrawRTextStatLabelsForSupport
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	DrawRTextStatLabelsForSupport, %function
DrawRTextStatLabelsForSupport:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	@ link register save eliminated.
@ StatScreen.c:138: 	asm("@jumpToHack at 0x08089F70.\n\
	.syntax divided
@ 138 "StatScreen.c" 1
	@jumpToHack at 0x08089F70.
		mov r1, r0
		cmp r1, #0x1
		beq WeaponBox
			cmp r1, #0x0
			beq NormalType
				cmp r1, #0x2
				beq StaffType
					cmp r1, #0x3
					beq SaveType
						cmp r1, #0x4
						beq SupportBox
							b NotFound
						SupportBox:	@custom
						mov r0, r5	@proc
						bl DrawRTextStatLabels
						mov r1, #0x02			@not sure what this does just yet
						b NormalType
					SaveType:	@0x08089FAC
					ldr r1, =0x08099FAD
					bx r1
				StaffType:	@0x08089FA4
				ldr r1, =0x08089FA5
				bx r1
			NormalType:  @0x08089F8E
			mov r0, r5
			add r0, #0x64
			strh r1, [ r0 ]
			b NotFound
		WeaponBox:  @0x08089F96
		ldr r1, =0x08089F97
		bx r1
		
		NotFound:
		ldr r1, =0x08089FB9
		bx r1
		.ltorg
@ 0 "" 2
@ StatScreen.c:175: }
	.thumb
	.syntax unified
	@ sp needed	@
	bx	lr
	.size	DrawRTextStatLabelsForSupport, .-DrawRTextStatLabelsForSupport
	.align	1
	.global	DrawRTextStatLabels
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	DrawRTextStatLabels, %function
DrawRTextStatLabels:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	push	{r4, r5, r6, lr}	@
@ StatScreen.c:181: 		Text_InsertString(&SomeTextHandle,RTextLabels[i],8,SupportRTextStatNames[i].name);
	ldr	r5, .L203	@ tmp113,
	ldr	r4, .L203+4	@ tmp114,
	movs	r0, r5	@, tmp113
	movs	r2, #8	@,
	movs	r1, #0	@,
	ldr	r3, .L203+8	@,
	bl	.L50		@
	movs	r0, r5	@, tmp113
	movs	r2, #8	@,
	movs	r1, #44	@,
	ldr	r3, .L203+12	@,
	bl	.L50		@
	movs	r0, r5	@, tmp113
	movs	r2, #8	@,
	movs	r1, #88	@,
	ldr	r3, .L203+16	@,
	bl	.L50		@
@ StatScreen.c:185: 		Text_InsertString(&SomeTextHandle+1,RTextLabels[i],8,SupportRTextStatNames[i+3].name);
	ldr	r5, .L203+20	@ tmp122,
	movs	r2, #8	@,
	movs	r0, r5	@, tmp122
	movs	r1, #0	@,
	ldr	r3, .L203+24	@,
	bl	.L50		@
	movs	r0, r5	@, tmp122
	movs	r2, #8	@,
	movs	r1, #44	@,
	ldr	r3, .L203+28	@,
	bl	.L50		@
	movs	r0, r5	@, tmp122
	movs	r2, #8	@,
	movs	r1, #88	@,
	ldr	r3, .L203+32	@,
	bl	.L50		@
@ StatScreen.c:188: }
	@ sp needed	@
	movs	r0, #2	@,
	pop	{r4, r5, r6}
	pop	{r1}
	bx	r1
.L204:
	.align	2
.L203:
	.word	SomeTextHandle
	.word	Text_InsertString
	.word	SupportRTextStatNames
	.word	SupportRTextStatNames+4
	.word	SupportRTextStatNames+8
	.word	SomeTextHandle+8
	.word	SupportRTextStatNames+12
	.word	SupportRTextStatNames+16
	.word	SupportRTextStatNames+20
	.size	DrawRTextStatLabels, .-DrawRTextStatLabels
	.align	1
	.global	DrawRTextStatValuesForSupport
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	DrawRTextStatValuesForSupport, %function
DrawRTextStatValuesForSupport:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	@ link register save eliminated.
@ StatScreen.c:192: 	asm("@jumpToHack at 0x08089FD8, just add an extra condition for 0x4\n\
	.syntax divided
@ 192 "StatScreen.c" 1
	@jumpToHack at 0x08089FD8, just add an extra condition for 0x4
		mov r0, r4
		blh #0x080892D0, r3 @GetRtextItemBoxType
		cmp r0, #0x1
		beq WeaponType
			cmp r0, #0x3
			beq SaveMenuType
				cmp r0, #0x4
					beq SupportType
						b DefaultCase
					SupportType:
					mov r0, r5				@ 29-2b data here
					bl DrawRTextStatValues
					b DefaultCase
				SaveMenuType: @0x08089FF4
				ldr r1, =0x08089FF5
				bx r1
			WeaponType:
			mov r0, r4
			ldr r1, =0x08089FEF
			bx r1
		DefaultCase: @0x08089FF8
		ldr r1, =0x08089FF9
		bx r1
		.ltorg
@ 0 "" 2
@ StatScreen.c:217: }
	.thumb
	.syntax unified
	@ sp needed	@
	bx	lr
	.size	DrawRTextStatValuesForSupport, .-DrawRTextStatValuesForSupport
	.align	1
	.global	DrawRTextStatValues
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	DrawRTextStatValues, %function
DrawRTextStatValues:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 8
	@ frame_needed = 0, uses_anonymous_args = 0
	push	{r0, r1, r2, r4, r5, lr}	@
@ StatScreen.c:222: 	for ( int i = 0 ; i < 6 ; i++ ) { bonuses.vals[i] = 0; }
	movs	r3, #0	@ tmp122,
	mov	r2, sp	@ tmp161,
	str	r3, [sp]	@ tmp122, MEM[(unsigned char *)&bonuses]
	strh	r3, [r2, #4]	@ tmp122, MEM[(unsigned char *)&bonuses + 4B]
@ StatScreen.c:223: 	GetBonusByCharacter(&bonuses,ToUnit(proc->char1),proc->char2);
	movs	r3, r0	@ tmp128, proc
	adds	r3, r3, #41	@ tmp128,
@ StatScreen.c:220: {
	movs	r4, r0	@ proc, tmp159
@ StatScreen.c:223: 	GetBonusByCharacter(&bonuses,ToUnit(proc->char1),proc->char2);
	ldrb	r0, [r3]	@ tmp129,
	bl	ToUnit		@
@ StatScreen.c:223: 	GetBonusByCharacter(&bonuses,ToUnit(proc->char1),proc->char2);
	adds	r4, r4, #42	@ tmp132,
@ StatScreen.c:223: 	GetBonusByCharacter(&bonuses,ToUnit(proc->char1),proc->char2);
	movs	r1, r0	@ _3, tmp160
	ldrb	r2, [r4]	@ tmp133,
	mov	r0, sp	@,
	bl	GetBonusByCharacter		@
@ StatScreen.c:226: 		Text_InsertNumberOr2Dashes(&SomeTextHandle,RTextStats[i],7,bonuses.vals[i]);
	mov	r3, sp	@ tmp163,
	ldr	r5, .L207	@ tmp137,
	ldr	r4, .L207+4	@ tmp138,
	movs	r0, r5	@, tmp137
	movs	r2, #7	@,
	movs	r1, #32	@,
	ldrb	r3, [r3]	@ bonuses, bonuses
	bl	.L50		@
	mov	r3, sp	@ tmp164,
	movs	r0, r5	@, tmp137
	movs	r2, #7	@,
	movs	r1, #74	@,
	ldrb	r3, [r3, #1]	@ tmp140,
	bl	.L50		@
	mov	r3, sp	@ tmp165,
	movs	r0, r5	@, tmp137
	movs	r2, #7	@,
	movs	r1, #120	@,
	ldrb	r3, [r3, #2]	@ tmp144,
	bl	.L50		@
@ StatScreen.c:230: 		Text_InsertNumberOr2Dashes(&SomeTextHandle+1,RTextStats[i],7,bonuses.vals[i+3]);
	mov	r3, sp	@ tmp166,
	ldr	r5, .L207+8	@ tmp149,
	movs	r2, #7	@,
	movs	r0, r5	@, tmp149
	movs	r1, #32	@,
	ldrb	r3, [r3, #3]	@ tmp148,
	bl	.L50		@
	mov	r3, sp	@ tmp167,
	movs	r0, r5	@, tmp149
	movs	r2, #7	@,
	movs	r1, #74	@,
	ldrb	r3, [r3, #4]	@ tmp152,
	bl	.L50		@
	mov	r3, sp	@ tmp168,
	movs	r0, r5	@, tmp149
	movs	r2, #7	@,
	movs	r1, #120	@,
	ldrb	r3, [r3, #5]	@ tmp156,
	bl	.L50		@
@ StatScreen.c:232: }
	@ sp needed	@
	pop	{r0, r1, r2, r4, r5}
	pop	{r0}
	bx	r0
.L208:
	.align	2
.L207:
	.word	SomeTextHandle
	.word	Text_InsertNumberOr2Dashes
	.word	SomeTextHandle+8
	.size	DrawRTextStatValues, .-DrawRTextStatValues
	.align	1
	.global	NewBoxType
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	NewBoxType, %function
NewBoxType:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	@ link register save eliminated.
@ StatScreen.c:236: 	asm("ldr r0, =#0xFFFE\n\
	.syntax divided
@ 236 "StatScreen.c" 1
	ldr r0, =#0xFFFE
		cmp r4, r0
		bne CheckForSupportData
			mov r0, #0x3
			b ExitFunc
		CheckForSupportData:
		ldr r0, =#0xFFFD
		cmp r4, r0
		bne CheckForItemData
			mov r0, #0x4
			ExitFunc:
			ldr r1, =0x0808931B
			bx r1
		CheckForItemData:
		ldr r1, =0x080892E5
		bx r1
		.ltorg
@ 0 "" 2
@ StatScreen.c:253: }
	.thumb
	.syntax unified
	@ sp needed	@
	bx	lr
	.size	NewBoxType, .-NewBoxType
	.align	1
	.global	SupportScreenRTextGetter
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	SupportScreenRTextGetter, %function
SupportScreenRTextGetter:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
@ StatScreen.c:258: 	Unit* current = gStatScreen.curr;
	ldr	r3, .L223	@ tmp125,
@ StatScreen.c:257: {
	push	{r4, r5, r6, lr}	@
@ StatScreen.c:258: 	Unit* current = gStatScreen.curr;
	ldr	r6, [r3, #12]	@ current, gStatScreen.curr
@ MemoryManagement.c:132: 		if ( unit->supports[i] )
	movs	r2, r6	@ tmp127, current
@ StatScreen.c:257: {
	movs	r5, r0	@ proc, tmp146
@ MemoryManagement.c:130: 	for ( int i = 0 ; i < 5 ; i++ )
	movs	r4, #0	@ i,
@ StatScreen.c:259: 	int loc = GetNthValidSupport(current,*(proc->rTextData+0x12));
	ldr	r3, [r0, #44]	@ tmp149, proc_14(D)->rTextData
	ldrb	r3, [r3, #18]	@ n, MEM[(char *)_1 + 18B]
@ MemoryManagement.c:132: 		if ( unit->supports[i] )
	adds	r2, r2, #52	@ tmp127,
.L213:
@ MemoryManagement.c:132: 		if ( unit->supports[i] )
	ldrb	r1, [r2, r4]	@ MEM[base: _39, index: _21, offset: 0B], MEM[base: _39, index: _21, offset: 0B]
	cmp	r1, #0	@ MEM[base: _39, index: _21, offset: 0B],
	beq	.L211		@,
@ MemoryManagement.c:134: 			if ( !n ) { return i; }
	cmp	r3, #0	@ n,
	beq	.L212		@,
@ MemoryManagement.c:135: 			n--;
	subs	r3, r3, #1	@ n,
.L211:
@ MemoryManagement.c:130: 	for ( int i = 0 ; i < 5 ; i++ )
	adds	r4, r4, #1	@ i,
@ MemoryManagement.c:130: 	for ( int i = 0 ; i < 5 ; i++ )
	cmp	r4, #5	@ i,
	bne	.L213		@,
@ MemoryManagement.c:138: 	return 0xFF; // nth valid support doesn't exist.
	adds	r4, r4, #250	@ i,
.L212:
@ StatScreen.c:261: 	proc->textID = 0x046B; // Store text ID for RText.
	ldr	r3, .L223+4	@ tmp129,
@ StatScreen.c:262: 	proc->char1 = ToCharID(current); // Store the characters and support level.
	movs	r0, r6	@, current
@ StatScreen.c:261: 	proc->textID = 0x046B; // Store text ID for RText.
	str	r3, [r5, #76]	@ tmp129, MEM[(short unsigned int *)proc_14(D) + 76B]
@ StatScreen.c:262: 	proc->char1 = ToCharID(current); // Store the characters and support level.
	bl	ToCharID		@
@ StatScreen.c:262: 	proc->char1 = ToCharID(current); // Store the characters and support level.
	movs	r3, r5	@ tmp132, proc
	adds	r3, r3, #41	@ tmp132,
@ StatScreen.c:269: 		proc->char2 = 0;
	movs	r1, #0	@ cstore_23,
@ StatScreen.c:262: 	proc->char1 = ToCharID(current); // Store the characters and support level.
	strb	r0, [r3]	@ tmp147, proc_14(D)->char1
@ StatScreen.c:263: 	if ( loc != 0xFF )
	cmp	r4, #255	@ i,
	beq	.L214		@,
@ StatScreen.c:265: 		proc->char2 = current->supports[loc]; // This is getting which index this is from the ROM RText data, representing the nth valid support.
	adds	r4, r6, r4	@ tmp134, current, i
	adds	r4, r4, #52	@ tmp137,
	ldrb	r1, [r4]	@ cstore_23, *current_13
.L214:
	movs	r3, r5	@ tmp140, proc
	adds	r3, r3, #42	@ tmp140,
@ StatScreen.c:271: 	proc->level = GetSupportLevel(current,proc->char2);
	movs	r0, r6	@, current
	strb	r1, [r3]	@ cstore_23, proc_14(D)->char2
	bl	GetSupportLevel		@
@ StatScreen.c:271: 	proc->level = GetSupportLevel(current,proc->char2);
	adds	r5, r5, #43	@ tmp144,
	strb	r0, [r5]	@ tmp148, proc_14(D)->level
@ StatScreen.c:272: }
	@ sp needed	@
	pop	{r4, r5, r6}
	pop	{r0}
	bx	r0
.L224:
	.align	2
.L223:
	.word	gStatScreen
	.word	-195477
	.size	SupportScreenRTextGetter, .-SupportScreenRTextGetter
	.align	1
	.global	SupportScreenRTextLooper
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	SupportScreenRTextLooper, %function
SupportScreenRTextLooper:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
@ StatScreen.c:276: 	Unit* current = gStatScreen.curr;
	ldr	r3, .L239	@ tmp123,
@ StatScreen.c:275: {
	push	{r4, r5, r6, lr}	@
@ StatScreen.c:276: 	Unit* current = gStatScreen.curr;
	ldr	r5, [r3, #12]	@ current, gStatScreen.curr
@ StatScreen.c:275: {
	movs	r4, r0	@ proc, tmp132
@ StatScreen.c:277: 	if ( !CountSupports(current) ) { RTextLeft(proc); }
	movs	r0, r5	@, current
	bl	CountSupports		@
@ StatScreen.c:277: 	if ( !CountSupports(current) ) { RTextLeft(proc); }
	cmp	r0, #0	@ tmp133,
	bne	.L226		@,
@ StatScreen.c:277: 	if ( !CountSupports(current) ) { RTextLeft(proc); }
	movs	r0, r4	@, proc
	ldr	r3, .L239+4	@ tmp124,
.L238:
@ StatScreen.c:284: 			if ( GetNthValidSupport(current,*(proc->rTextData+0x12)) == 0xFF ) { RTextDown(proc) ; return; }
	bl	.L15		@
.L225:
@ StatScreen.c:293: }
	@ sp needed	@
	pop	{r4, r5, r6}
	pop	{r0}
	bx	r0
.L226:
@ StatScreen.c:281: 		if ( proc->direction == 0x80 )
	movs	r3, r4	@ tmp127, proc
	adds	r3, r3, #80	@ tmp127,
@ StatScreen.c:281: 		if ( proc->direction == 0x80 )
	ldrh	r3, [r3]	@ tmp128,
	cmp	r3, #128	@ tmp128,
	bne	.L225		@,
@ StatScreen.c:284: 			if ( GetNthValidSupport(current,*(proc->rTextData+0x12)) == 0xFF ) { RTextDown(proc) ; return; }
	ldr	r3, [r4, #44]	@ tmp135, proc_10(D)->rTextData
	ldrb	r2, [r3, #18]	@ n, MEM[(char *)_3 + 18B]
	movs	r3, r5	@ ivtmp.208, current
	adds	r5, r5, #57	@ _22,
	adds	r3, r3, #52	@ ivtmp.208,
.L229:
@ MemoryManagement.c:132: 		if ( unit->supports[i] )
	ldrb	r1, [r3]	@ MEM[base: _18, offset: 0B], MEM[base: _18, offset: 0B]
	cmp	r1, #0	@ MEM[base: _18, offset: 0B],
	beq	.L228		@,
@ MemoryManagement.c:134: 			if ( !n ) { return i; }
	cmp	r2, #0	@ n,
	beq	.L225		@,
@ MemoryManagement.c:135: 			n--;
	subs	r2, r2, #1	@ n,
.L228:
	adds	r3, r3, #1	@ ivtmp.208,
@ MemoryManagement.c:130: 	for ( int i = 0 ; i < 5 ; i++ )
	cmp	r3, r5	@ ivtmp.208, _22
	bne	.L229		@,
@ StatScreen.c:284: 			if ( GetNthValidSupport(current,*(proc->rTextData+0x12)) == 0xFF ) { RTextDown(proc) ; return; }
	movs	r0, r4	@, proc
	ldr	r3, .L239+8	@ tmp131,
	b	.L238		@
.L240:
	.align	2
.L239:
	.word	gStatScreen
	.word	RTextLeft
	.word	RTextDown
	.size	SupportScreenRTextLooper, .-SupportScreenRTextLooper
	.align	1
	.global	SupportBaseConvoUsability
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	SupportBaseConvoUsability, %function
SupportBaseConvoUsability:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	push	{r4, r5, r6, lr}	@
@ Base.c:3: {
	movs	r4, r0	@ entry, tmp128
@ Base.c:4: 	if ( entry->supportLevel != 0xFF )
	ldrb	r5, [r4, #3]	@ tmp123,
	ldrb	r0, [r0]	@ _24, *entry_17(D)
	cmp	r5, #255	@ tmp123,
	beq	.L242		@,
@ Base.c:6: 		return CanUnitsSupport(ToUnit(entry->character1),entry->character2,entry->supportLevel);
	bl	ToUnit		@
	ldrb	r2, [r4, #3]	@ tmp124,
	ldrb	r1, [r4, #1]	@ tmp125,
.L244:
@ Base.c:10: 		return CanUnitsSupport(ToUnit(entry->character1),entry->character2,0xFF); // Let's say support level of 0xFF in the base convo table means undefined level.
	bl	CanUnitsSupport		@
@ Base.c:12: }
	@ sp needed	@
	pop	{r4, r5, r6}
	pop	{r1}
	bx	r1
.L242:
@ Base.c:10: 		return CanUnitsSupport(ToUnit(entry->character1),entry->character2,0xFF); // Let's say support level of 0xFF in the base convo table means undefined level.
	bl	ToUnit		@
	movs	r2, r5	@, tmp123
	ldrb	r1, [r4, #1]	@ tmp126,
	b	.L244		@
	.size	SupportBaseConvoUsability, .-SupportBaseConvoUsability
	.section	.rodata.str1.1,"aMS",%progbits,1
.LC59:
	.ascii	" and \000"
	.text
	.align	1
	.global	SupportBaseConvoMenuTextGetter
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	SupportBaseConvoMenuTextGetter, %function
SupportBaseConvoMenuTextGetter:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	push	{r3, r4, r5, r6, r7, lr}	@
@ Base.c:15: {
	movs	r4, r0	@ entry, tmp155
@ Base.c:17: 	int name1 = ToUnit(entry->character1)->pCharacterData->nameTextId;
	ldrb	r0, [r0]	@ *entry_20(D), *entry_20(D)
	bl	ToUnit		@
@ Base.c:17: 	int name1 = ToUnit(entry->character1)->pCharacterData->nameTextId;
	ldr	r3, [r0]	@ _3->pCharacterData, _3->pCharacterData
@ Base.c:18: 	int name2 = ToUnit(entry->character2)->pCharacterData->nameTextId;
	ldrb	r0, [r4, #1]	@ tmp139,
@ Base.c:17: 	int name1 = ToUnit(entry->character1)->pCharacterData->nameTextId;
	ldrh	r5, [r3]	@ name1, *_4
@ Base.c:18: 	int name2 = ToUnit(entry->character2)->pCharacterData->nameTextId;
	bl	ToUnit		@
@ Base.c:18: 	int name2 = ToUnit(entry->character2)->pCharacterData->nameTextId;
	ldr	r3, [r0]	@ _8->pCharacterData, _8->pCharacterData
@ Base.c:20: 	int offset = CopyString(GetStringFromIndex(name1),(char*)gGenericBuffer);
	ldr	r6, .L246	@ tmp141,
	movs	r0, r5	@, name1
@ Base.c:18: 	int name2 = ToUnit(entry->character2)->pCharacterData->nameTextId;
	ldrh	r7, [r3]	@ name2, *_9
@ Base.c:20: 	int offset = CopyString(GetStringFromIndex(name1),(char*)gGenericBuffer);
	bl	.L248		@
	ldr	r5, .L246+4	@ tmp142,
	movs	r1, r5	@, tmp142
	bl	CopyString		@
@ Base.c:21: 	offset += CopyString(" and ",(char*)gGenericBuffer+offset); // Yes yes yes I'm so happy this appears to work!
	adds	r1, r0, r5	@ tmp143, offset, tmp142
@ Base.c:20: 	int offset = CopyString(GetStringFromIndex(name1),(char*)gGenericBuffer);
	movs	r4, r0	@ offset, tmp159
@ Base.c:21: 	offset += CopyString(" and ",(char*)gGenericBuffer+offset); // Yes yes yes I'm so happy this appears to work!
	ldr	r0, .L246+8	@,
	bl	CopyString		@
@ Base.c:21: 	offset += CopyString(" and ",(char*)gGenericBuffer+offset); // Yes yes yes I'm so happy this appears to work!
	adds	r4, r4, r0	@ offset, offset, tmp160
@ Base.c:22: 	offset += CopyString(GetStringFromIndex(name2),(char*)gGenericBuffer+offset);
	movs	r0, r7	@, name2
	bl	.L248		@
	adds	r1, r4, r5	@ tmp147, offset, tmp142
	bl	CopyString		@
@ Base.c:23: 	*((char*)gGenericBuffer + offset) = 0;
	movs	r3, #0	@ tmp152,
	adds	r4, r4, r0	@ tmp149, offset, tmp162
	adds	r4, r4, r5	@ tmp150, tmp149, tmp142
@ Base.c:25: }
	movs	r0, r5	@, tmp142
	@ sp needed	@
@ Base.c:23: 	*((char*)gGenericBuffer + offset) = 0;
	strb	r3, [r4]	@ tmp152, *_18
@ Base.c:25: }
	pop	{r3, r4, r5, r6, r7}
	pop	{r1}
	bx	r1
.L247:
	.align	2
.L246:
	.word	GetStringFromIndex
	.word	gGenericBuffer
	.word	.LC59
	.size	SupportBaseConvoMenuTextGetter, .-SupportBaseConvoMenuTextGetter
	.align	1
	.global	SetUpBaseSupportConvo
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	SetUpBaseSupportConvo, %function
SetUpBaseSupportConvo:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	@ link register save eliminated.
@ Base.c:43: 	BaseConvoEntry* entry = (BaseConvoEntry*)gMemorySlot[0xC];
	ldr	r3, .L250	@ tmp117,
@ Base.c:43: 	BaseConvoEntry* entry = (BaseConvoEntry*)gMemorySlot[0xC];
	ldr	r2, [r3, #48]	@ entry, gMemorySlot
@ Base.c:44: 	gMemorySlot[8] = entry->character1;
	ldrb	r1, [r2]	@ *entry_7, *entry_7
	str	r1, [r3, #32]	@ *entry_7, gMemorySlot
@ Base.c:45: 	gMemorySlot[9] = entry->character2;
	ldrb	r2, [r2, #1]	@ tmp121,
@ Base.c:46: }
	@ sp needed	@
@ Base.c:45: 	gMemorySlot[9] = entry->character2;
	str	r2, [r3, #36]	@ tmp121, gMemorySlot
@ Base.c:46: }
	bx	lr
.L251:
	.align	2
.L250:
	.word	gMemorySlot
	.size	SetUpBaseSupportConvo, .-SetUpBaseSupportConvo
	.align	1
	.global	MasterSupportCalculation
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	MasterSupportCalculation, %function
MasterSupportCalculation:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 8
	@ frame_needed = 0, uses_anonymous_args = 0
@ MasterCalculations.c:210: 	for ( int i = 0 ; i < 6 ; i++ ) { bonuses->vals[i] = 0; } // Clear the bonus struct.
	movs	r3, #0	@ tmp136,
@ MasterCalculations.c:209: {
	push	{r0, r1, r2, r4, r5, r6, r7, lr}	@
@ MasterCalculations.c:210: 	for ( int i = 0 ; i < 6 ; i++ ) { bonuses->vals[i] = 0; } // Clear the bonus struct.
	strb	r3, [r1]	@ tmp136, *bonuses_11(D)
	strb	r3, [r1, #1]	@ tmp136,
	strb	r3, [r1, #2]	@ tmp136,
	strb	r3, [r1, #3]	@ tmp136,
	strb	r3, [r1, #4]	@ tmp136,
	strb	r3, [r1, #5]	@ tmp136,
@ MasterCalculations.c:211: 	if ( unit->unit.index >> 6 ) { return; } // For high unit index, i.e. non-blue unit, exit.
	movs	r3, #11	@ tmp148,
	ldrsb	r3, [r0, r3]	@ tmp148,
@ MasterCalculations.c:209: {
	movs	r5, r0	@ unit, tmp158
	movs	r4, r1	@ bonuses, tmp159
@ MasterCalculations.c:211: 	if ( unit->unit.index >> 6 ) { return; } // For high unit index, i.e. non-blue unit, exit.
	asrs	r3, r3, #6	@ tmp151, tmp148,
	bne	.L252		@,
	movs	r3, r0	@ _50, unit
	movs	r6, r0	@ ivtmp.223, unit
	adds	r3, r3, #57	@ _50,
	str	r3, [sp, #4]	@ _50, %sfp
	adds	r6, r6, #52	@ ivtmp.223,
.L259:
@ MasterCalculations.c:214: 		int supportingChar = unit->unit.supports[i];
	ldrb	r7, [r6]	@ supportingChar, MEM[base: _62, offset: 0B]
@ MasterCalculations.c:215: 		if ( supportingChar )
	cmp	r7, #0	@ supportingChar,
	beq	.L255		@,
@ MasterCalculations.c:218: 			Unit* supportingUnit = ToUnit(supportingChar);
	movs	r0, r7	@, supportingChar
	bl	ToUnit		@
@ MasterCalculations.c:219: 			if ( !supportingUnit ) { continue; } // Continue if unit does not exist.
	cmp	r0, #0	@ supportingUnit,
	beq	.L255		@,
@ MasterCalculations.c:220: 			if ( supportingUnit->state & (US_DEAD|US_NOT_DEPLOYED) ) { continue; } // Continue if dead or not deployed.
	movs	r2, #12	@ tmp164,
	ldr	r3, [r0, #12]	@ tmp163, supportingUnit_17->state
	tst	r3, r2	@ tmp163, tmp164
	bne	.L255		@,
@ MasterCalculations.c:279: 	return abs(unit1->xPos - unit2->xPos) + abs(unit1->yPos - unit2->yPos);
	movs	r3, #16	@ _24,
@ MasterCalculations.c:279: 	return abs(unit1->xPos - unit2->xPos) + abs(unit1->yPos - unit2->yPos);
	movs	r1, #16	@ _26,
@ MasterCalculations.c:279: 	return abs(unit1->xPos - unit2->xPos) + abs(unit1->yPos - unit2->yPos);
	ldrsb	r3, [r5, r3]	@ _24,* _24
@ MasterCalculations.c:279: 	return abs(unit1->xPos - unit2->xPos) + abs(unit1->yPos - unit2->yPos);
	ldrsb	r1, [r0, r1]	@ _26,* _26
@ MasterCalculations.c:279: 	return abs(unit1->xPos - unit2->xPos) + abs(unit1->yPos - unit2->yPos);
	subs	r2, r3, r1	@ _27, _24, _26
@ MasterCalculations.c:283: 	if ( i < 0 ) { return i*-1; }
	bpl	.L257		@,
@ MasterCalculations.c:283: 	if ( i < 0 ) { return i*-1; }
	subs	r2, r1, r3	@ _27, _26, _24
.L257:
@ MasterCalculations.c:279: 	return abs(unit1->xPos - unit2->xPos) + abs(unit1->yPos - unit2->yPos);
	movs	r1, #17	@ _30,
@ MasterCalculations.c:279: 	return abs(unit1->xPos - unit2->xPos) + abs(unit1->yPos - unit2->yPos);
	ldrb	r0, [r0, #17]	@ _32,
@ MasterCalculations.c:279: 	return abs(unit1->xPos - unit2->xPos) + abs(unit1->yPos - unit2->yPos);
	ldrsb	r1, [r5, r1]	@ _30,* _30
@ MasterCalculations.c:279: 	return abs(unit1->xPos - unit2->xPos) + abs(unit1->yPos - unit2->yPos);
	lsls	r0, r0, #24	@ _32, _32,
	asrs	r0, r0, #24	@ _32, _32,
@ MasterCalculations.c:279: 	return abs(unit1->xPos - unit2->xPos) + abs(unit1->yPos - unit2->yPos);
	subs	r3, r1, r0	@ _33, _30, _32
@ MasterCalculations.c:283: 	if ( i < 0 ) { return i*-1; }
	bpl	.L258		@,
@ MasterCalculations.c:283: 	if ( i < 0 ) { return i*-1; }
	subs	r3, r0, r1	@ _33, _32, _30
.L258:
@ MasterCalculations.c:279: 	return abs(unit1->xPos - unit2->xPos) + abs(unit1->yPos - unit2->yPos);
	adds	r3, r3, r2	@ tmp156, _33, _27
@ MasterCalculations.c:221: 			if ( GetCharacterDistance(&unit->unit,supportingUnit) <= 3 )
	cmp	r3, #3	@ tmp156,
	bgt	.L255		@,
@ MasterCalculations.c:223: 				GetBonusByCharacter(bonuses,&unit->unit,supportingChar);
	movs	r2, r7	@, supportingChar
	movs	r1, r5	@, unit
	movs	r0, r4	@, bonuses
	bl	GetBonusByCharacter		@
.L255:
@ MasterCalculations.c:212: 	for ( int i = 0 ; i < 5 ; i++ )
	ldr	r3, [sp, #4]	@ _50, %sfp
	adds	r6, r6, #1	@ ivtmp.223,
	cmp	r6, r3	@ ivtmp.223, _50
	bne	.L259		@,
.L252:
@ MasterCalculations.c:227: }
	@ sp needed	@
	pop	{r0, r1, r2, r4, r5, r6, r7}
	pop	{r0}
	bx	r0
	.size	MasterSupportCalculation, .-MasterSupportCalculation
	.align	1
	.global	DrawSupports
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	DrawSupports, %function
DrawSupports:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 24
	@ frame_needed = 0, uses_anonymous_args = 0
@ StatScreen.c:8: 	Unit* current = gStatScreen.curr;
	ldr	r3, .L273	@ tmp172,
@ StatScreen.c:7: {
	push	{r4, r5, r6, r7, lr}	@
@ StatScreen.c:8: 	Unit* current = gStatScreen.curr;
	ldr	r4, [r3, #12]	@ current, gStatScreen.curr
	movs	r3, r4	@ _128, current
@ StatScreen.c:7: {
	sub	sp, sp, #36	@,,
	adds	r3, r3, #57	@ _128,
	str	r3, [sp, #20]	@ _128, %sfp
@ StatScreen.c:10: 	int y = 2;
	movs	r3, #2	@ y,
	movs	r5, r4	@ ivtmp.249, current
	str	r3, [sp, #8]	@ y, %sfp
@ StatScreen.c:9: 	TextHandle* textBase = &TileBufferBase;
	ldr	r7, .L273+4	@ textBase,
	adds	r5, r5, #52	@ ivtmp.249,
.L266:
@ StatScreen.c:15: 		if ( current->supports[i] )
	ldrb	r0, [r5]	@ _1, MEM[base: _116, offset: 0B]
@ StatScreen.c:15: 		if ( current->supports[i] )
	cmp	r0, #0	@ _1,
	beq	.L265		@,
@ StatScreen.c:18: 			(textBase+1)->tileIndexOffset = textBase->tileIndexOffset+8;
	ldrh	r3, [r7]	@ *textBase_37, *textBase_37
	adds	r3, r3, #8	@ tmp175,
@ StatScreen.c:18: 			(textBase+1)->tileIndexOffset = textBase->tileIndexOffset+8;
	strh	r3, [r7, #8]	@ tmp175, MEM[(struct TextHandle *)textBase_37 + 8B].tileIndexOffset
@ StatScreen.c:19: 			textBase->tileWidth = 8;
	movs	r3, #8	@ tmp303,
	ldr	r2, [sp, #8]	@ y, %sfp
	strb	r3, [r7, #4]	@ tmp302, textBase_37->tileWidth
	lsls	r2, r2, #6	@ _97, y,
	movs	r6, r3	@ tmp303, tmp303
	str	r2, [sp, #12]	@ _97, %sfp
@ StatScreen.c:20: 			DrawTextInline(textBase,&Tile_Origin[y][x],0,4,8,GetStringFromIndex(ToUnit(current->supports[i])->pCharacterData->nameTextId)); // Draw the name of the supporting character.
	bl	ToUnit		@
@ StatScreen.c:20: 			DrawTextInline(textBase,&Tile_Origin[y][x],0,4,8,GetStringFromIndex(ToUnit(current->supports[i])->pCharacterData->nameTextId)); // Draw the name of the supporting character.
	ldr	r3, [r0]	@ _7->pCharacterData, _7->pCharacterData
@ StatScreen.c:20: 			DrawTextInline(textBase,&Tile_Origin[y][x],0,4,8,GetStringFromIndex(ToUnit(current->supports[i])->pCharacterData->nameTextId)); // Draw the name of the supporting character.
	ldrh	r0, [r3]	@ *_8, *_8
	ldr	r3, .L273+8	@ tmp181,
	bl	.L15		@
@ StatScreen.c:20: 			DrawTextInline(textBase,&Tile_Origin[y][x],0,4,8,GetStringFromIndex(ToUnit(current->supports[i])->pCharacterData->nameTextId)); // Draw the name of the supporting character.
	ldr	r1, [sp, #12]	@ tmp182, %sfp
	ldr	r3, .L273+12	@ tmp351,
	adds	r1, r1, #26	@ tmp182,
	adds	r1, r1, r3	@ tmp183, tmp182, tmp351
	movs	r3, r6	@ tmp307, tmp303
	movs	r2, #0	@,
	str	r0, [sp, #4]	@ tmp296,
	str	r6, [sp]	@ tmp307,
	movs	r0, r7	@, textBase
	ldr	r6, .L273+16	@ tmp308,
	subs	r3, r3, #4	@,
	bl	.L248		@
@ StatScreen.c:24: 			(textBase+1)->tileIndexOffset = textBase->tileIndexOffset+2;
	movs	r3, r7	@ _13, textBase
	adds	r3, r3, #16	@ _13,
	str	r3, [sp, #16]	@ _13, %sfp
@ StatScreen.c:24: 			(textBase+1)->tileIndexOffset = textBase->tileIndexOffset+2;
	ldrh	r3, [r7, #8]	@ MEM[(struct TextHandle *)textBase_37 + 8B], MEM[(struct TextHandle *)textBase_37 + 8B]
	adds	r3, r3, #2	@ tmp189,
@ StatScreen.c:24: 			(textBase+1)->tileIndexOffset = textBase->tileIndexOffset+2;
	strh	r3, [r7, #16]	@ tmp189, MEM[(struct TextHandle *)textBase_37 + 16B].tileIndexOffset
@ StatScreen.c:25: 			textBase->tileWidth = 2;
	movs	r3, #2	@ tmp312,
	strb	r3, [r7, #12]	@ tmp311, MEM[(struct TextHandle *)textBase_37 + 8B].tileWidth
@ StatScreen.c:26: 			DrawTextInline(textBase,&Tile_Origin[y][x],0,0,2,SupportLevelNameTable[GetSupportLevel(current,current->supports[i])]); // Draw the support level.
	movs	r0, r4	@, current
	ldrb	r1, [r5]	@ MEM[base: _116, offset: 0B], MEM[base: _116, offset: 0B]
@ StatScreen.c:25: 			textBase->tileWidth = 2;
	movs	r6, r3	@ tmp312, tmp312
@ StatScreen.c:26: 			DrawTextInline(textBase,&Tile_Origin[y][x],0,0,2,SupportLevelNameTable[GetSupportLevel(current,current->supports[i])]); // Draw the support level.
	bl	GetSupportLevel		@
@ StatScreen.c:26: 			DrawTextInline(textBase,&Tile_Origin[y][x],0,0,2,SupportLevelNameTable[GetSupportLevel(current,current->supports[i])]); // Draw the support level.
	lsls	r0, r0, r6	@ tmp199, tmp297,
@ StatScreen.c:26: 			DrawTextInline(textBase,&Tile_Origin[y][x],0,0,2,SupportLevelNameTable[GetSupportLevel(current,current->supports[i])]); // Draw the support level.
	ldr	r1, [sp, #12]	@ _97, %sfp
	ldr	r3, .L273+12	@ tmp350,
	adds	r1, r1, #44	@ _97,
	adds	r1, r1, r3	@ tmp195, tmp194, tmp350
	ldr	r3, .L273+20	@ tmp198,
	ldr	r2, [r0, r3]	@ tmp314, SupportLevelNameTable
	movs	r3, #0	@,
	adds	r7, r7, #8	@ tmp197,
	movs	r0, r7	@, tmp197
	str	r2, [sp, #4]	@ tmp314,
	str	r6, [sp]	@ tmp315,
	movs	r2, r3	@,
	ldr	r6, .L273+16	@ tmp316,
	bl	.L248		@
@ StatScreen.c:28: 			y += 2;
	ldr	r3, [sp, #8]	@ y, %sfp
	adds	r3, r3, #2	@ y,
	str	r3, [sp, #8]	@ y, %sfp
@ StatScreen.c:27: 			textBase++;
	ldr	r7, [sp, #16]	@ textBase, %sfp
.L265:
@ StatScreen.c:13: 	for ( int i = 0 ; i < 5 ; i++ )
	ldr	r3, [sp, #20]	@ _128, %sfp
	adds	r5, r5, #1	@ ivtmp.249,
	cmp	r5, r3	@ ivtmp.249, _128
	bne	.L266		@,
@ StatScreen.c:34: 	BgMap_ApplyTsa(&Bg2_Origin[y][x],&SupportStatScreenBlueBox,0x3040);
	movs	r2, #193	@,
	ldr	r1, .L273+24	@,
	ldr	r0, .L273+28	@,
	ldr	r3, .L273+32	@ tmp206,
	lsls	r2, r2, #6	@,,
	bl	.L15		@
@ StatScreen.c:38: 	(textBase+1)->tileIndexOffset = textBase->tileIndexOffset+14;
	ldrh	r3, [r7]	@ *textBase_38, *textBase_38
	adds	r3, r3, #14	@ tmp209,
@ StatScreen.c:38: 	(textBase+1)->tileIndexOffset = textBase->tileIndexOffset+14;
	strh	r3, [r7, #8]	@ tmp209, MEM[(struct TextHandle *)textBase_38 + 8B].tileIndexOffset
@ StatScreen.c:39: 	textBase->tileWidth = 14;
	movs	r3, #14	@ tmp211,
@ StatScreen.c:41: 	textBase++;
	movs	r6, r7	@ textBase, textBase
@ StatScreen.c:40: 	DrawTextInline(textBase,&Tile_Origin[y][x],3,3,14,&TotalCurrentSupportBonusesText);
	ldr	r2, .L273+36	@ tmp214,
@ StatScreen.c:39: 	textBase->tileWidth = 14;
	strb	r3, [r7, #4]	@ tmp211, textBase_38->tileWidth
@ StatScreen.c:40: 	DrawTextInline(textBase,&Tile_Origin[y][x],3,3,14,&TotalCurrentSupportBonusesText);
	str	r3, [sp]	@ tmp211,
	subs	r3, r3, #11	@,
	movs	r0, r7	@, textBase
	str	r2, [sp, #4]	@ tmp214,
	ldr	r1, .L273+40	@,
	movs	r2, r3	@,
	ldr	r5, .L273+16	@ tmp216,
	bl	.L189		@
@ StatScreen.c:44: 	MasterSupportCalculation((BattleUnit*)current,&bonuses);
	add	r5, sp, #24	@ tmp217,,
	movs	r0, r4	@, current
	movs	r1, r5	@, tmp217
@ StatScreen.c:41: 	textBase++;
	adds	r6, r6, #8	@ textBase,
	str	r6, [sp, #8]	@ textBase, %sfp
@ StatScreen.c:44: 	MasterSupportCalculation((BattleUnit*)current,&bonuses);
	bl	MasterSupportCalculation		@
	ldr	r3, .L273+44	@ ivtmp.239,
	str	r3, [sp, #12]	@ ivtmp.239, %sfp
	ldr	r3, .L273+48	@ ivtmp.241,
	str	r3, [sp, #16]	@ ivtmp.241, %sfp
	movs	r3, r7	@ _34, textBase
@ StatScreen.c:50: 		textBase->tileWidth = 3;
	movs	r4, #3	@ tmp222,
	adds	r3, r3, #32	@ _34,
	str	r3, [sp, #20]	@ _34, %sfp
.L267:
@ StatScreen.c:49: 		(textBase+1)->tileIndexOffset = textBase->tileIndexOffset+3;
	ldr	r3, [sp, #8]	@ textBase, %sfp
	ldrh	r3, [r3]	@ MEM[base: textBase_68, offset: 0B], MEM[base: textBase_68, offset: 0B]
@ StatScreen.c:49: 		(textBase+1)->tileIndexOffset = textBase->tileIndexOffset+3;
	ldr	r2, [sp, #8]	@ textBase, %sfp
@ StatScreen.c:49: 		(textBase+1)->tileIndexOffset = textBase->tileIndexOffset+3;
	adds	r3, r3, #3	@ tmp220,
@ StatScreen.c:49: 		(textBase+1)->tileIndexOffset = textBase->tileIndexOffset+3;
	strh	r3, [r2, #8]	@ tmp220, MEM[base: textBase_68, offset: 8B]
@ StatScreen.c:51: 		DrawTextInline(textBase,&Tile_Origin[y][x],3,0,3,SupportRTextStatNames[i].name);
	ldr	r3, [sp, #16]	@ ivtmp.241, %sfp
@ StatScreen.c:50: 		textBase->tileWidth = 3;
	strb	r4, [r2, #4]	@ tmp222, MEM[base: textBase_68, offset: 4B]
@ StatScreen.c:51: 		DrawTextInline(textBase,&Tile_Origin[y][x],3,0,3,SupportRTextStatNames[i].name);
	ldr	r1, [sp, #12]	@, %sfp
	movs	r2, #3	@,
	str	r3, [sp, #4]	@ ivtmp.241,
	str	r4, [sp]	@ tmp222,
	movs	r3, #0	@,
	ldr	r0, [sp, #8]	@, %sfp
	ldr	r6, .L273+16	@ tmp327,
	bl	.L248		@
@ StatScreen.c:52: 		textBase++;
	ldr	r3, [sp, #8]	@ textBase, %sfp
	adds	r3, r3, #8	@ textBase,
	str	r3, [sp, #8]	@ textBase, %sfp
	ldr	r3, [sp, #12]	@ ivtmp.239, %sfp
	adds	r3, r3, #10	@ ivtmp.239,
	str	r3, [sp, #12]	@ ivtmp.239, %sfp
	ldr	r3, [sp, #16]	@ ivtmp.241, %sfp
	adds	r3, r3, #4	@ ivtmp.241,
	str	r3, [sp, #16]	@ ivtmp.241, %sfp
@ StatScreen.c:47: 	for ( int i = 0 ; i < 3 ; i++ )
	ldr	r2, [sp, #8]	@ textBase, %sfp
	ldr	r3, [sp, #20]	@ _34, %sfp
	cmp	r3, r2	@ _34, textBase
	bne	.L267		@,
@ StatScreen.c:59: 		(textBase+1)->tileIndexOffset = textBase->tileIndexOffset+3;
	ldrh	r3, [r7, #32]	@ MEM[(struct TextHandle *)textBase_38 + 32B], MEM[(struct TextHandle *)textBase_38 + 32B]
	adds	r3, r3, #3	@ tmp228,
@ StatScreen.c:59: 		(textBase+1)->tileIndexOffset = textBase->tileIndexOffset+3;
	strh	r3, [r7, #40]	@ tmp228, MEM[(struct TextHandle *)textBase_38 + 40B].tileIndexOffset
@ StatScreen.c:60: 		textBase->tileWidth = 3;
	adds	r3, r7, #5	@ tmp231, textBase,
	strb	r4, [r3, #31]	@ tmp222, MEM[(struct TextHandle *)textBase_38 + 32B].tileWidth
@ StatScreen.c:61: 		DrawTextInline(textBase,&Tile_Origin[y][x],3,0,3,SupportRTextStatNames[i+3].name);
	ldr	r3, .L273+52	@ tmp236,
	str	r4, [sp]	@ tmp222,
	str	r3, [sp, #4]	@ tmp236,
	ldr	r0, [sp, #20]	@, %sfp
	movs	r3, #0	@,
	movs	r2, #3	@,
	ldr	r1, .L273+56	@,
	ldr	r6, .L273+16	@ tmp334,
	bl	.L248		@
@ StatScreen.c:60: 		textBase->tileWidth = 3;
	movs	r0, r7	@ tmp245, textBase
@ StatScreen.c:59: 		(textBase+1)->tileIndexOffset = textBase->tileIndexOffset+3;
	ldrh	r3, [r7, #40]	@ MEM[(struct TextHandle *)textBase_38 + 40B], MEM[(struct TextHandle *)textBase_38 + 40B]
	adds	r3, r3, #3	@ tmp241,
@ StatScreen.c:59: 		(textBase+1)->tileIndexOffset = textBase->tileIndexOffset+3;
	strh	r3, [r7, #48]	@ tmp241, MEM[(struct TextHandle *)textBase_38 + 48B].tileIndexOffset
@ StatScreen.c:61: 		DrawTextInline(textBase,&Tile_Origin[y][x],3,0,3,SupportRTextStatNames[i+3].name);
	ldr	r3, .L273+60	@ tmp250,
@ StatScreen.c:60: 		textBase->tileWidth = 3;
	adds	r0, r0, #40	@ tmp245,
	strb	r4, [r0, #4]	@ tmp222, MEM[(struct TextHandle *)textBase_38 + 40B].tileWidth
@ StatScreen.c:61: 		DrawTextInline(textBase,&Tile_Origin[y][x],3,0,3,SupportRTextStatNames[i+3].name);
	movs	r2, #3	@,
	str	r3, [sp, #4]	@ tmp250,
	str	r4, [sp]	@ tmp222,
	movs	r3, #0	@,
	ldr	r1, .L273+64	@,
	ldr	r6, .L273+16	@ tmp337,
	bl	.L248		@
@ StatScreen.c:60: 		textBase->tileWidth = 3;
	movs	r0, r7	@ textBase, textBase
@ StatScreen.c:59: 		(textBase+1)->tileIndexOffset = textBase->tileIndexOffset+3;
	ldrh	r3, [r7, #48]	@ MEM[(struct TextHandle *)textBase_38 + 48B], MEM[(struct TextHandle *)textBase_38 + 48B]
	adds	r3, r3, #3	@ tmp255,
@ StatScreen.c:59: 		(textBase+1)->tileIndexOffset = textBase->tileIndexOffset+3;
	strh	r3, [r7, #56]	@ tmp255, MEM[(struct TextHandle *)textBase_38 + 56B].tileIndexOffset
@ StatScreen.c:61: 		DrawTextInline(textBase,&Tile_Origin[y][x],3,0,3,SupportRTextStatNames[i+3].name);
	ldr	r3, .L273+68	@ tmp264,
@ StatScreen.c:60: 		textBase->tileWidth = 3;
	adds	r0, r0, #48	@ textBase,
	strb	r4, [r0, #4]	@ tmp222, MEM[(struct TextHandle *)textBase_38 + 48B].tileWidth
@ StatScreen.c:61: 		DrawTextInline(textBase,&Tile_Origin[y][x],3,0,3,SupportRTextStatNames[i+3].name);
	movs	r2, #3	@,
	str	r3, [sp, #4]	@ tmp264,
	str	r4, [sp]	@ tmp222,
	movs	r3, #0	@,
	ldr	r1, .L273+72	@,
	ldr	r4, .L273+16	@ tmp340,
	bl	.L50		@
@ StatScreen.c:69: 		DrawUiNumberOrDoubleDashes(&Tile_Origin[y][x],2,bonuses.vals[i]);
	ldr	r4, .L273+76	@ tmp270,
	ldrb	r2, [r5]	@ bonuses, bonuses
	movs	r1, #2	@,
	ldr	r0, .L273+80	@,
	bl	.L50		@
	ldrb	r2, [r5, #1]	@ tmp272,
	movs	r1, #2	@,
	ldr	r0, .L273+84	@,
	bl	.L50		@
	ldrb	r2, [r5, #2]	@ tmp276,
	movs	r1, #2	@,
	ldr	r0, .L273+88	@,
	bl	.L50		@
@ StatScreen.c:76: 		DrawUiNumberOrDoubleDashes(&Tile_Origin[y][x],2,bonuses.vals[i+3]);
	ldrb	r2, [r5, #3]	@ tmp280,
	movs	r1, #2	@,
	ldr	r0, .L273+92	@,
	bl	.L50		@
	ldrb	r2, [r5, #4]	@ tmp284,
	movs	r1, #2	@,
	ldr	r0, .L273+96	@,
	bl	.L50		@
	movs	r1, #2	@,
	ldrb	r2, [r5, #5]	@ tmp288,
	ldr	r0, .L273+100	@,
	bl	.L50		@
@ StatScreen.c:79: }
	add	sp, sp, #36	@,,
	@ sp needed	@
	pop	{r4, r5, r6, r7}
	pop	{r0}
	bx	r0
.L274:
	.align	2
.L273:
	.word	gStatScreen
	.word	TileBufferBase
	.word	GetStringFromIndex
	.word	Tile_Origin
	.word	DrawTextInline
	.word	SupportLevelNameTable
	.word	SupportStatScreenBlueBox
	.word	Bg2_Origin+770
	.word	BgMap_ApplyTsa
	.word	TotalCurrentSupportBonusesText
	.word	Tile_Origin+796
	.word	Tile_Origin+924
	.word	SupportRTextStatNames
	.word	SupportRTextStatNames+12
	.word	Tile_Origin+1052
	.word	SupportRTextStatNames+16
	.word	Tile_Origin+1062
	.word	SupportRTextStatNames+20
	.word	Tile_Origin+1072
	.word	DrawUiNumberOrDoubleDashes
	.word	Tile_Origin+930
	.word	Tile_Origin+940
	.word	Tile_Origin+950
	.word	Tile_Origin+1058
	.word	Tile_Origin+1068
	.word	Tile_Origin+1078
	.size	DrawSupports, .-DrawSupports
	.align	1
	.global	FixCUSA
	.syntax unified
	.code	16
	.thumb_func
	.fpu softvfp
	.type	FixCUSA, %function
FixCUSA:
	@ Function supports interworking.
	@ args = 0, pretend = 0, frame = 0
	@ frame_needed = 0, uses_anonymous_args = 0
	@ link register save eliminated.
@ MasterCalculations.c:259: 	asm("@ r4 = new ally character struct.\n\
	.syntax divided
@ 259 "MasterCalculations.c" 1
	@ r4 = new ally character struct.
		beq VanillaCUSASkip
			ldr r1, =0x0859A5D0
			lsl r0, r0, #0x02
			add r0, r0, r1
			ldr r1, [ r0 ]
			ldrb r0, [ r4, #0x0B ]
			strb r0, [ r1, #0x1B ]
		VanillaCUSASkip: @ Some weird vanilla shit about rescuing. All vanilla above here.
		mov r0, #0x00
		mov r1, #0x38
		strb r0, [ r4, r1 ] @ Set the character leader byte to 0. (Interferes with support data)
		pop { r4 - r6 }
		pop { r0 }
		bx r0
		.ltorg
@ 0 "" 2
@ MasterCalculations.c:275: }
	.thumb
	.syntax unified
	@ sp needed	@
	bx	lr
	.size	FixCUSA, .-FixCUSA
	.section	.rodata
	.set	.LANCHOR0,. + 0
	.type	yAdj, %object
	.size	yAdj, 4
yAdj:
	.ascii	"\000\000\377\001"
	.type	xAdj, %object
	.size	xAdj, 4
xAdj:
	.ascii	"\377\001\000\000"
	.ident	"GCC: (devkitARM release 53) 9.1.0"
	.text
	.code 16
	.align	1
.L15:
	bx	r3
.L50:
	bx	r4
.L189:
	bx	r5
.L248:
	bx	r6