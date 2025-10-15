# setup.py
from setuptools import setup

setup(
    name='spellingbee',
    version='0.1.1',
    py_modules=['admin_tool'],
    install_requires=[
        'openai',
        'python-dotenv',
        'requests'
    ],
    entry_points={
        'console_scripts': [
            'spellingbee=admin_tool:main',
        ],
    },
)
