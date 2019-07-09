<template>
	<vx-card>
		<Accountpoput></Accountpoput>
		<TableMiscellaneous></TableMiscellaneous>
	</vx-card>
</template>

<script>
import TableMiscellaneous from './account/Table'
import Accountpoput from './account/Accountpoput'

export default {
	components:{
		TableMiscellaneous,
		Accountpoput
	}
}
</script>
