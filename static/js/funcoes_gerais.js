function gera_input(item, parent){	
	var para_inputs_arr = [
		'text',
		'number',
		'date'
	]
	
	var para_select_arr = ['select']
	
	if(para_inputs_arr.includes(item.type)){
		para_inputs(item, parent)
	} else if(para_select_arr.includes(item.type)){
		para_select(item, parent)
	}
}

function para_select(item, parent){
	var row = document.createElement('div')
	row.className = 'row mt-2'
	
	var col = document.createElement('div')
	col.className = 'col'
	
	var label = document.createElement('label')
	label.innerHTML = item.label_innerHTML
	
	var select = document.createElement('select')
	select.name = item.name	
	select.className = 'form-select'
	select.classList.add(item.input_class)	
	col.appendChild(label)
	col.appendChild(select)
	
	item.opts_arr.forEach((opt, index) => {
		var option = document.createElement('option')
		option.innerHTML = item.opt_arr_innerHTML[index]
		option.value = opt
		select.appendChild(option)
	})
	
	row.appendChild(col)
	$(parent).append(row)
}

function para_inputs(item, parent){
	var row = document.createElement('div')
	row.className = 'row mt-2'
	
	var col = document.createElement('div')
	col.className = 'col'
	
	var label = document.createElement('label')
	label.innerHTML = item.label_innerHTML
	
	var input = document.createElement('input')
	input.type = item.type
	input.name = item.name	
	input.className = 'form-control'
	input.autocomplete = 'one-time-code'
	input.classList.add(item.input_class)	
	
	col.appendChild(label)
	col.appendChild(input)		
	row.appendChild(col)
	$(parent).append(row)	
}