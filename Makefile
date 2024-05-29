.PHONY: start sentences calendar

serve:
	@echo "Starting HTTP server on port 8080..."
	@python3 -m http.server 8080

sentences:
	@echo "Querying ChatGPT and saving sentences to sentences.json..."
	@python3 get_sentences.py test

calendar:
	@echo "Displaying current, previous, and next week numbers and start dates..."
	@python3 -c "import datetime; \
	today = datetime.date.today(); \
	current_weekday = today.isocalendar().weekday; \
	start_date = today - datetime.timedelta(days=current_weekday - 1); \
	print(f\"{'Week':<15}{'Number':<8}{'Start Date'}\"); \
	print('-' * 34); \
	[print(f\"{('Current Week' if i == 0 else ('Previous Week' if i == -1 else 'Next Week')):<15}{today.isocalendar().week + i:<8}{start_date + datetime.timedelta(days=7 * i)}\") for i in range(-1, 2)]"
