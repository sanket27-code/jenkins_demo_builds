FROM python:3
WORKDIR /src/app/python
ADD my_script.py /src/app/python/
RUN pip install pystrich
CMD ["python", "my_script.py"]