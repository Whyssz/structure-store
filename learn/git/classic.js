/*
Слияния:
	git merge - простое слияние веток
	git rebase - более чистая ветка, создаёт новый коммит и откидывает дополнительную ветку 
	(флаг -i позволит выбрать что делать с коммитами оставить(omit)/удалить(pick)/объединить - git rebase -i HEAD~4)

Путешествие:
	git branch -f main COMMIT(HEAD~1) - принудительно переместить ветку на коммит
	git checkout COMMIT(HEAD^)

Отмена:
	git reset HEAD~1 - перезаписывает-откатывает/стирает изменения на коммит до ***для локальных
	( + --soft для сохранения данных)
	git revert COMMIT - создаёт дополнительный коммит по верх прошлого с изменениями ***для групповых работ
	(-n возможность перезаписать коммит)
	ДОП:
		git reset --soft HEAD~1 - отмена с сохранение данных
		git commit --amend дополнение последнего коммита
		git push -f - перезапишет последний коммит ***в команде нужно быть осторожным

Полезно:
	git cherry-pick C1 C3 - перемещение необходимых коммитов в нашу ветку


Дополнительные возможности: https://habr.com/ru/company/vk/blog/267595/
	git branch -a - поиск и удаление старых веток	
	git stash name (или git stash -p) - откладывание изменения файлов
*/

/* EX:
	Есть ветка с двумя коммитами, необходимо сделать её копию и изменить в ней первый коммит, объединить ветку с main сохранив последовательность  
	git rebase -i HEAD~2
	git commit --amend
	git rebase -i HEAD~2 (на это этапе ветка отсеится)
	git branch -f main HEAD
*/