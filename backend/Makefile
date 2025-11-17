ENV_EXEC=uv run
ENV_PKG_INSTALLER=


all: lint format

run_prod:
	${ENV_EXEC} fastapi run src/main.py

run_dev:
# 	${ENV_EXEC} fastapi dev src/main.py
	${ENV_EXEC} uvicorn src.main:app --reload --host localhost --port 8000

format:
	${ENV_EXEC} ruff check ./src --fix
	${ENV_EXEC} ruff format ./src
	${ENV_EXEC} black ./src

lint:
	${ENV_EXEC} ruff check ./src
	${ENV_EXEC} ruff format ./src --check || exit 0

req_install:
	uv sync

d_c_run:
	sudo docker compose run --build --rm web

d_c_up:
	sudo docker compose up

d_c_down:
	sudo docker compose down

tests:

clean:
	rm -rf __pycache__ ./*/__pycache__ ./*/*/./*/__pycache__
	rm -rf ./.ruff_cache
	rm -rf ./.venv
	rm -rf *.log
