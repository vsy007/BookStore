
find -print0 |
  	while IFS= read -rd '' dir; 
	do
		if [[ $dir == *" (1)"* ]]; then
			rep=" (1)"
			sub=""
			res="${dir//$rep/$sub}"    
#			echo $dir
			mv "$dir" "$res"
		fi
	done
